export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  readonly password: string;
  cover: string;
  profile_image: string;
  birth_date: string;
  following: string;
};
