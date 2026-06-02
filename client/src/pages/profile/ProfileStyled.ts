import styled from "styled-components";

export const EditProfile = styled.button`
  z-index: 1;
  position: absolute;
  opacity: .7;
  right: .2rem;
  top: .2rem;
  padding: .5rem;
  border-radius: 35%;
  background-color: gray;
  transition: all ease-in .2s;
  border: none;
  cursor: pointer;

    &:hover{
    opacity: .9;
    transition: all ease-in .2s;
  }
`

export const Section = styled.section`
  position: relative;
`
