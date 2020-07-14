import { PostAction } from '../_post/PostReducer';
import { Post } from '../_post/PostInterfaces';

export type ReducerType = 'POST_REDUCER';

export const ReducerTypes = {
  POST_REDUCER: <ReducerType>'POST_REDUCER',
};

export type Action = PostAction;

export const updatePOSTState = (input: Post): PostAction => {
  return {
    type: ReducerTypes.POST_REDUCER,
    payload: input,
  };
};
