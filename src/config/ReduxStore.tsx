// Imports
import React from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
// default reducers
import { PostReducer } from '../_post/PostReducer';
import { Post } from '../_post/PostInterfaces';

// Interfaces
interface CustomWindow extends Window {
  __NEXT_REDUX_STORE__: any;
}
declare let window: CustomWindow;

export interface StoreState {
  post: Post;
}

// Config
const reducers: any = combineReducers<StoreState>({
  post: PostReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: [],
  // There is an issue in the source code of redux-persist (default setTimeout does not cleaning)
  timeout: 0, // <-- code checks for falsey so this should disable it
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { createLogger } = require(`redux-logger`);

  const logger = createLogger({ collapsed: true });

  middlewares.push(logger);
}

export function initializeStore(initialState: any) {
  return createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
}

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState: any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

type Props = { reduxStore: StoreState };
export type Store = ReturnType<typeof getOrCreateStore>;

const withReduxStore = (Component: React.ComponentClass<Props>) => {
  return class Redux extends React.Component<Props> {
    private reduxStore: any;

    static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore(undefined);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if ((Component as any).getInitialProps) {
        appProps = await (Component as any).getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState(),
      };
    }

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <Component {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default withReduxStore;

export const mapDispatchToProps = (dispatch: any) => ({ dispatch });

export type Dispatchable<P> = P & ReturnType<typeof mapDispatchToProps>;
