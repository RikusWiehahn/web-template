import { ReducerTypes, ReducerType } from '../config/_Actions';
import { Post, EMPTY_POST_STATE } from './PostInterfaces';

export interface PostAction {
  type: ReducerType;
  payload: Post;
}

const INITIAL_STATE = <Post>{
  ...EMPTY_POST_STATE,
};

export const PostReducer = (
  state: Post = INITIAL_STATE,
  action: PostAction
) => {
  switch (action.type) {
    case ReducerTypes.POST_REDUCER: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
