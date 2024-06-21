import styled from "styled-components";

type Props = {
  color: string;
};

// font-weight: 400; /* normal */
// font-weight: 500;  /* Medium */
// font-weight: 600;  /* semi-bold */
// font-weight: 700; /* bold */
// 40
// 32
// 24
// 20
// 16
export const Header1 = styled.h1<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 24px; // Even smaller size on small and below
  }
`;

export const Header2 = styled.h2<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
  letter-spacing: 0.02em;
`;

export const Header3 = styled.h3<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 32px;
  line-height: 110%;
  letter-spacing: 0.02em;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    font-size: ${({ theme }) =>
      theme.fontSizes.body}; // Smaller size on medium and below
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 18px; // Even smaller size on small and below
  }
`;

export const Header4 = styled.h4<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 500;
  font-size: 28px;
  line-height: 140%;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 16px; // Even smaller size on small and below
  }
  /* text-transform: uppercase; */
`;

export const LabelMedium = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 18px;
  line-height: 100%;
`;

export const Label = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 14px;
  line-height: 100%;
`;

export const InputValidation = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 12px;
  line-height: 100%;
`;

export const Titles = styled.h1<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 700;
  font-size: 40px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 20px; // Even smaller size on small and below
  }
`;
export const PageTitle = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
`;

export const PageSubtitle = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 24px;
  line-height: 110%;
  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 20px; // Even smaller size on small and below
  }
`;

export const TitleCase = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  text-transform: capitalize;
`;

export const ParagraphMedium = styled.h4<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-transform: uppercase;
`;

export const Paragraph = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 300;
  font-size: 16px;
  line-height: 145%;
`;

export const ParagraphArticles = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 20px;
  line-height: 145%;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.sm}px) {
    font-size: 14px; // Even smaller size on small and below
  }
`;

export const ParagraphSemiBold = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 145%;
`;

export const ParagraphSmall = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 12px;
  line-height: 110%;
`;

export const ParagraphSmallStrong = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 110%;
`;

export const SmallTitles = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
  text-transform: uppercase;
`;

export const BigNumbers = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 36px;
  line-height: 110%;
`;
export const Tags = styled.p`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 300;
  font-size: 18px;
  line-height: 100%;
  text-decoration: underline;
`;

export const TagsSmall = styled.p`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 12px;
  line-height: 100%;
`;

export const TagsMedium = styled.p`
  color: ${(props) => props.color};
  margin: 0px;

  font-weight: 700;
  font-size: 20px;

  line-height: 140%;
`;

export const ParagraphDetail = styled.p`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  text-transform: capitalize;
`;
