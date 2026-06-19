import styled from "styled-components";
import { colors } from "../../styles/theme";

type Props = {isOpen: boolean};

export const SideMenu = styled.aside<Props>`
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
  border-right: solid 1px ${colors.gray500} ;

  @media (max-width: 480px) {
    z-index: 1;
    top: 60px;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    background-color: ${colors.gray800};

    header{
      display: none;
    }
  }
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
export const ButtonLogout = styled.section<Props>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  top: -4rem;
  right: 1rem;
`

export const Account = styled.button`
  width: 100%;
  position: relative;
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

    @media (max-width: 768px) {
      p{
        font-size: 1.2rem;
      }
    }
  }

`

