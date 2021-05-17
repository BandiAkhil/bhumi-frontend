export interface Comment {
  id: number;
  text: string;
  postId: number;
  parentCommentId: number;
  userId: number;
  username: string;
  date: string;
}
