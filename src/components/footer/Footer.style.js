/* Style */
import colors from "@/styles/colors";
import Link from "next/link";

/* Logic */
import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  padding: 3rem 1rem;
  background-color: ${colors.dark};
  color: ${colors.light};
  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  a {
    padding: 0.5rem 1rem;
    background-color: ${colors.dark};
    isolation: isolate;
    transition: 0.3s;

    position: relative;

    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      color: ${colors.dark};
      font-weight: bold;
      font-size: 1.6rem;
    }

    ::before {
      content: "";
      width: 0%;
      height: 100%;
      background-color: ${colors.light};
      border-radius: 0.5rem;
      transition: 0.3s;

      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }

    :hover {
      color: ${colors.dark};

      :before {
        width: 100%;
      }
    }

    :nth-of-type(1) {
      z-index: 6;
    }
    :nth-of-type(2) {
      z-index: 5;
    }
    :nth-of-type(3) {
      z-index: 4;
    }
    :nth-of-type(4) {
      z-index: 3;
    }
    :nth-of-type(5) {
      z-index: 2;
    }
    :nth-of-type(6) {
      z-index: 1;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem 1rem;
  }

  .link {
    border: 0.1rem solid ${colors.light};
    border-radius: 0.5rem;
  }
`;

export const IconContainer = styled(Link)`
  width: 8rem;
  overflow: hidden;
  transition: 0.3s;

  position: relative;

  display: flex;
  align-items: center;

  .icon {
    min-width: 3.5em;
    max-width: 3.5em;
    transition: 0.3s;
  }

  :hover {
    width: 15rem;

    p {
      margin-left: -0.5rem;
    }
  }
`;
