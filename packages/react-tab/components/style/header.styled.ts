import styled from "styled-components";

export const Header = styled.header`
  width: 100%;

  ul {
    display: flex;
    gap: 20px;
    padding: 0;
    list-style: none;
    border-bottom: 2px solid ghostwhite;

    li {
      position: relative;
      padding: 5px 0;
      text-transform: capitalize;
    }

    :hover {
      cursor: pointer;
    }
  }

  .active {
    color: red;
  }

  .active:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 100%;
    bottom: 0;
    display: block;
    background-color: red;
  }
`;
