import type { IUser } from "./IUser";

export interface IPost {
  id: number;
  user: IUser;
  midia: string;
  content: string;
  creation_at: Date;
  likes_count: number;
  comments_count: number;
};
