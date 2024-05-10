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

    > * {
      text-align: center;
      padding-bottom: 0px;
      padding: 6px 0px;
      border: 1px solid #ccc7d2;

      &:first-child {
        border-radius: 8px 0px 0px 8px;
      }
      &:last-child {
        border-radius: 0px 8px 8px 0px;
      }

      &.is-active {
        border-color: ${(props) => props.theme.colors.primary};
        background-color: ${(props) => props.theme.colors.primary};
        > * {
          border-color: ${(props) => props.theme.colors.primary};
        }
      }

      > * {
        text-transform: none;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 145%;
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
`;

export const Wrapper = styled.div`
  height: 100%;
`;
