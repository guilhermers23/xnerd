export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  readonly password: string;
  cover: string | null;
  profile_image: string | null;
  birth_date: string;
  following: string;
};
