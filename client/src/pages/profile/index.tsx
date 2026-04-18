import { MeProfile } from "../../components/meProfile";
import { useGetMeQuery } from "../../services/Users.Service";

export const Profile = () => {
  const { data: getUser, error, isLoading } = useGetMeQuery();

  return (
    <>
      {isLoading && "Carregando..."}
      {getUser && !error ?
        <MeProfile id={getUser?.id} cover={getUser?.cover}
          following={getUser?.following}
          name={getUser?.name}
          profile_image={getUser?.profile_image}
          username={getUser?.username}
        />
        : "Ocorreu um erro ao processar os dados!"}
    </>
  )
};
