import { ReducerType, SplitterAction } from '../config/_Actions';
import { Splitter, EMPTY_SPLITTER_STATE } from './SplitterInterfaces';

export const SplitterReducer = (
  state: Splitter = EMPTY_SPLITTER_STATE,
  action: SplitterAction
) => {
  switch (action.type) {
    case 'SPLITTER_REDUCER': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
