import { Splitter } from '../_splitter/SplitterInterfaces';

export type ReducerType = 'SPLITTER_REDUCER';

export interface SplitterAction {
  type: ReducerType;
  payload: Splitter;
}
export type UpdateSplitterState = (input: Splitter) => SplitterAction;
export const updateSplitterState: UpdateSplitterState = (input) => {
  return {
    type: 'SPLITTER_REDUCER',
    payload: input,
  };
};
