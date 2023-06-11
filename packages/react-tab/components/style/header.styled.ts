import styled from "styled-components";

interface themeProp {
  color?: string;
}

export const Header = styled.header<themeProp>`
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
    color: ${({ color }) => (color ? color : "red")};
  }

  .active:before {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 100%;
    bottom: 0;
    display: block;
    background-color: ${({ color }) => (color ? color : "red")};
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    max-width: 100%;
    overflow: auto;

    ul {
      li {
        white-space: nowrap;
      }
    }
  }
`;
