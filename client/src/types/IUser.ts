export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  readonly password: string;
  cover: string | null;
  profile_image: string | null;
  birth_date: string;
  following: number[];
  followers_count: number;
  following_count: number;
  is_following?: boolean;
};
