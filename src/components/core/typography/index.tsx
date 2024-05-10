import React from "react";

// import { ColorProps, useSelectColor } from 'modules/core/presenters/utils';

import {
  Header1,
  Header2,
  Header3,
  Header4,
  Label,
  InputValidation,
  Titles,
  PageTitle,
  Paragraph,
  ParagraphArticles,
  ParagraphSemiBold,
  ParagraphSmall,
  ParagraphSmallStrong,
  SmallTitles,
  BigNumbers,
  TitleCase,
  TagsSmall,
  TagsMedium,
} from "./styles";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "label"
  | "input-validation"
  | "titles"
  | "page-title"
  | "p"
  | "p-articles"
  | "p-semi-bold"
  | "p-small"
  | "p-small-strong"
  | "small-titles"
  | "big-numbers"
  | "titles-case"
  | "tags-small"
  | "tags-medium";

const mappedStyles: Record<TypographyVariant, any> = {
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  label: Label,
  "input-validation": InputValidation,
  titles: Titles,
  "page-title": PageTitle,
  p: Paragraph,
  "p-articles": ParagraphArticles,
  "p-semi-bold": ParagraphSemiBold,
  "p-small": ParagraphSmall,
  "p-small-strong": ParagraphSmallStrong,
  "small-titles": SmallTitles,
  "big-numbers": BigNumbers,
  "titles-case": TitleCase,
  "tags-small": TagsSmall,
  "tags-medium": TagsMedium,
};

export type TypographyProps = {
  variant?: TypographyVariant;
  title?: string;
  customColor?: string;
  children?: React.ReactNode;
};
export const Typography: React.FC<TypographyProps> = ({
  customColor = "#574E61",
  variant = "p",
  title,
  children,
}) => {
  const Component = mappedStyles[variant];
  return (
    <Component color={customColor} title={title}>
      {children}
    </Component>
  );
};
