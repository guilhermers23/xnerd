import styled from "styled-components";
import { colors } from "../../styles/theme";

export const SideMenu = styled.aside`
  header{
  padding: 1rem;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 1rem;
  width: 100%;
  height: 100vh;
  gap: 1rem;
  align-self: flex-start;
  text-align: left;
`

export const ListMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 2rem;
  gap: 1rem;

  li{
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 1rem;
    padding: 1rem;

    &:hover{
      background-color: ${colors.gray600};
    }
  }
`

export const Account = styled.button`
  font-size: 1.6rem;
  color: ${colors.textDefault};
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover{
    background-color: ${colors.gray800};
  }

  span{
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p{
      font-size: 1.5rem;
      color: ${colors.gray400};
    }
  }
`

