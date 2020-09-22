import Axios from 'axios';
import io from 'socket.io-client';
import { serverURL } from './keys';
export const socket = io.connect(serverURL);
socket.on('connect', () => {
  console.log('connected!');
});

export type ServiceType =
  // Pages
  'CREATE_NEW_PAGE' | 'GET_PAGE_BY_ID' | 'ADD_PAGE_COVER_IMAGE' | 'UPDATE_PAGE';

interface APIRequestInterface {
  type: ServiceType;
  input: object;
}

interface APIRequestResponse {
  success: boolean;
  message: string | null;
  output: { [key: string]: any } | null;
}

export type APIRequestFunction = ({
  type,
  input,
}: APIRequestInterface) => Promise<APIRequestResponse>;

//
//   ####   ####   ####  #    # ###### #####     #  ####
//  #      #    # #    # #   #  #        #       # #    #
//   ####  #    # #      ####   #####    #       # #    #
//       # #    # #      #  #   #        #   ### # #    #
//  #    # #    # #    # #   #  #        #   ### # #    #
//   ####   ####   ####  #    # ######   #   ### #  ####

export const APIRequest = async ({
  type,
  input,
}: APIRequestInterface): Promise<APIRequestResponse> => {
  let dev = true;
  if (typeof window !== 'undefined') {
    if (!window.location.href.includes('http://localhost:3000')) {
      dev = false;
    }
  }
  return new Promise((resolve) => {
    try {
      if (dev) {
        console.groupCollapsed('%capi_request', 'color: aqua;', type);
        console.log('input', input);
        console.groupEnd();
      }
      socket.emit(
        'main',
        { type, input },
        ({ success, message, output }: APIRequestResponse) => {
          if (success) {
            if (dev) {
              console.groupCollapsed('%capi_response', 'color: lime;', type);
              console.log('success', success);
              console.log('message:', message);
              console.log('output', output);
              console.groupEnd();
            }
            resolve({ success, message, output });
          } else {
            if (dev) {
              console.groupCollapsed('%capi_response', 'color: orange;', type);
              console.log('success', success);
              console.log('message:', message);
              console.log('output', output);
              console.groupEnd();
            }
            resolve({ success, message, output });
          }
        }
      );
    } catch (e) {
      if (dev) {
        console.groupCollapsed('%capi_response', 'color: red;', type);
        console.log('message:', e.message);
        console.log('status', e.response ? e.response.status : e);
        console.groupEnd();
      }
      resolve({ success: false, message: e.message, output: null });
    }
  });
};

//
//  #    # ##### ##### #####
//  #    #   #     #   #    #
//  ######   #     #   #    #
//  #    #   #     #   #####
//  #    #   #     #   #
//  #    #   #     #   #

export const httpAPIRequest = async ({
  type,
  input,
}: APIRequestInterface): Promise<APIRequestResponse> => {
  let dev = true;
  if (typeof window !== 'undefined') {
    if (!window.location.href.includes('http://localhost:3000')) {
      dev = false;
    }
  }
  return new Promise(async (resolve) => {
    try {
      if (dev) {
        console.groupCollapsed('%chttp_api_request', 'color: aqua;', type);
        console.log('input', input);
        console.groupEnd();
      }
      const {
        data: { success, message, output },
      }: { data: APIRequestResponse } = await Axios({
        url: `${serverURL}/main`,
        method: 'post',
        data: {
          type,
          input,
        },
      });
      if (success) {
        if (dev) {
          console.groupCollapsed('%chttp_api_response', 'color: lime;', type);
          console.log('success', success);
          console.log('message:', message);
          console.log('output', output);
          console.groupEnd();
        }
        resolve({ success, message, output });
      } else {
        if (dev) {
          console.groupCollapsed('%chttp_api_response', 'color: orange;', type);
          console.log('success', success);
          console.log('message:', message);
          console.log('output', output);
          console.groupEnd();
        }
        resolve({ success, message, output });
      }
    } catch (e) {
      if (dev) {
        console.groupCollapsed('%capi_response', 'color: red;', type);
        console.log('message:', e.message);
        console.log('status', e.response ? e.response.status : e);
        console.groupEnd();
      }
      resolve({ success: false, message: e.message, output: null });
    }
  });
};
