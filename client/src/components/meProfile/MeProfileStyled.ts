import styled from "styled-components";
import { ProfileIcon } from "../profileIcon/ProfileIconStyled";
import { colors } from "../../styles/theme";

interface PropsCover { isCover: string };

export const Avatar = styled(ProfileIcon)`
  position: relative;
  width: 14rem;
  height: 14rem;
  border: 3px solid ${colors.gray900};
  margin-top: 6rem;
`

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  `

export const ProfileBackground = styled.div<PropsCover>`
  position: relative;
  background-image: url(${props => props.isCover == "undefined" ? '/banner.jpg' : props.isCover});
  object-fit: cover;
  width: 100%;
  height: 20%;
`

export const ProfileHeader = styled.header`
  width: 100%;
  text-align: left;
  padding: 2rem;
`

export const Span = styled.span`
  width: 100%;
  height: 2rem;
`

export const ProfileInfo = styled.div`
  padding: .5rem;
  text-align: left;

  h3{
    color: ${colors.gray300};
  }

  p{
    margin-top: 1rem;
    color: ${colors.gray200};
    font-weight: 400;
  }
`

export const EditCover = styled.span`
  position: absolute;
  opacity: .7;
  right: .2rem;
  top: .2rem;
  padding: .5rem;
  border-radius: 35%;
  background-color: #00000059;
  transition: all ease-in .2s;

    &:hover{
    opacity: .9;
    transition: all ease-in .2s;
  }
`

export const InputNone = styled.input`
  display: none;
`

export const EditAvatar = styled.span`
  position: absolute;
  opacity: 0;
  top: 12rem;
  width: 100%;
  align-items: center;
  left: 6rem;
  padding: 1rem;
  transition: all ease-in .2s;

  &:hover{
    opacity: .4;
    transition: all ease-in .2s;
  }
`
