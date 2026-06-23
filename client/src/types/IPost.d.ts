declare interface IPost {
  id: number;
  user: IUser;
  midia: string;
  midia_url: string;
  content: string;
  creation_at: Date;
  likes_count: number;
  is_liked: boolean;
  comments_count: number;
};
