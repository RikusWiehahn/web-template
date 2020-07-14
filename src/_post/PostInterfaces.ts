export type Post = {
  id: string;
  text: string;
};

export const EMPTY_POST_STATE = <Post>{
  id: '',
  text: '',
};
