import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

type HeaderVariant = "regular" | "grouped" | "modal";
type HeaderProps = {
  variant: HeaderVariant;
};

const headerVariantMap: Record<HeaderVariant, any> = {
  // *** Grouped ***
  grouped: css`
    display: grid;
    grid-auto-columns: minmax(0, 1fr);
    grid-auto-flow: column;
    width: 95%;

    > * {
      text-align: center;
      padding-bottom: 0px;
      padding: 6px 0px;
      border: transparent;
      border-radius: 6px;
      background-color: ${(props) => props.theme.colors.primary};
      &.is-active {
        border-color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.systemLight};
        > * {
          border-color: ${(props) => props.theme.colors.primary};
        }
      }
    }
  `,

  // *** Regular ***
  regular: css`
    > * {
      margin-left: 16px;

      &:first-child {
        margin-left: 0px;
      }
    }
  `,

  // *** Modal ***
  modal: css`
    margin: 20px 0px 0px 53px;
    > * {
      margin: 0px 8px;
    }
  `,
};
export const Header = styled.div<HeaderProps>`
  display: flex;
  ${(props) => headerVariantMap[props.variant]}
  background-color: ${(props) => props.theme.colors.primary};
  padding: 4px;
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
