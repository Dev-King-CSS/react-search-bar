import styled, { StyledComponent } from "styled-components"

export const Wrapper: StyledComponent<"div", any, {}, never> = styled.div`
  .searchInputs {
    display: flex;
    margin-top: 15rem;

    input {
      width: 300px;
      height: 30px;
      background-color: white;
      border: 0;
      border-radius: 1rem;
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
      font-size: 18px;
      padding: 15px;

      &:focus {
        outline: none;
      }
    }

    .searchIcon {
      width: 50px;
      height: 60px;
      background-color: white;
      border-radius: 1rem;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      display: grid;
      place-items: center;

      svg {
        cursor: pointer;
        font-size: 1.5rem;
      }
    }
  }
`

export const DataResult: StyledComponent<
  "div",
  any,
  {},
  never
> = styled.div`
  width: 375px;
  height: 200px;
  background-color: white;
  border-radius: 1rem;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  margin-top: 5px;
  box-shadow: #0004 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 1rem;
  }

  a {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    padding-left: 10px;

    &:hover {
      background-color: lightgrey;
    }
  }
`
