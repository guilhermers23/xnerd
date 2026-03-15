export const genereteUsername = (name: string) => {
  const nameUser = name.toLowerCase().split(" ");
  const randomNumber = Math.floor(Math.random() * 9000) + 1000;
  const username = `@${nameUser[0]}${nameUser[1]}${randomNumber}`;
  return username;
};
