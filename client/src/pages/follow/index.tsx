import { CardUsers } from "../../components/cardUsers";
import { useGetUsersQuery } from "../../services/Users.Service";
import { Cabecalho } from "../../styles/GlobalStyles";
import * as Style from "./FollowStyle";

export const Follow = () => {
  const { data, isLoading } = useGetUsersQuery();

  return (
    <Style.SectionFollow>
      <Cabecalho>Follow</Cabecalho>
      {isLoading && "Carregando Feed..."}
      {data?.map(({ name, username, profile_image, id }) =>
        <CardUsers key={id} id={id} name={name} username={username} profile_image={profile_image} />
      )}
    </Style.SectionFollow>
  )
};
