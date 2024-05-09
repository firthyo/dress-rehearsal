import styled from "styled-components";

type Props = {
  color: string;
};

export const Header1 = styled.h1<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const Header2 = styled.h2<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const Header3 = styled.h3<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: 0.02em;
`;

export const Header4 = styled.h4<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
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
  font-weight: 600;
  font-size: 26px;
  line-height: 125%;
`;
export const PageTitle = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 700;
  font-size: 24px;
  line-height: 110%;
`;

export const TitleCase = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: 600;
  font-size: 14px;
  line-height: 125%;
  text-transform: capitalize;
`;

export const Paragraph = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 14px;
  line-height: 145%;
`;

export const ParagraphArticles = styled.p<Props>`
  color: ${(props) => props.color};
  margin: 0px;
  font-weight: normal;
  font-size: 21px;
  line-height: 145%;
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
  font-size: 24px;
  line-height: 110%;
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
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
`;
