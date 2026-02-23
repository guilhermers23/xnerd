declare interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  readonly password: string;
  cover: string;
  profile_image: string;
  birth_date: string;
  following: string;
}

declare interface IPost {
  id: number;
  user: IUser;
  midia: string;
  content: string;
  creation_at: Date;
  likes: number;
  parent: number;
}
