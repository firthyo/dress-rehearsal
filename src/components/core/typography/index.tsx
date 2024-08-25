import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import {
  Header1,
  Header2,
  Header3,
  Header4,
  HighlightText,
  Label,
  LabelMedium,
  InputValidation,
  Titles,
  PageTitle,
  Paragraph,
  ParagraphMedium,
  ParagraphArticles,
  ParagraphSemiBold,
  ParagraphSmall,
  ParagraphSmallStrong,
  SmallTitles,
  BigNumbers,
  TitleCase,
  TagsSmall,
  TagsMedium,
  PageSubtitle,
  ParagraphDetail,
  Tags,
  ActionText,
} from "./styles";
import { MyTheme } from "styles/Theme";

export type TypographyVariant =
  | "action-text"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "highlight-text"
  | "label"
  | "label-medium"
  | "input-validation"
  | "titles"
  | "page-title"
  | "page-subtitle"
  | "p"
  | "p-medium"
  | "p-articles"
  | "p-semi-bold"
  | "p-small"
  | "p-small-strong"
  | "p-detail"
  | "small-titles"
  | "big-numbers"
  | "titles-case"
  | "tags-small"
  | "tags-medium"
  | "tags";

const mappedStyles: Record<TypographyVariant, any> = {
  "action-text": ActionText,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  "highlight-text": HighlightText,
  label: Label,
  "label-medium": LabelMedium,
  "input-validation": InputValidation,
  titles: Titles,

  "page-title": PageTitle,
  "page-subtitle": PageSubtitle,
  p: Paragraph,
  "p-articles": ParagraphArticles,
  "p-semi-bold": ParagraphSemiBold,
  "p-medium": ParagraphMedium,
  "p-small": ParagraphSmall,
  "p-small-strong": ParagraphSmallStrong,
  "p-detail": ParagraphDetail,
  "small-titles": SmallTitles,
  "big-numbers": BigNumbers,
  "titles-case": TitleCase,
  "tags-small": TagsSmall,
  "tags-medium": TagsMedium,
  tags: Tags,
};

export type TypographyProps = {
  variant?: TypographyVariant;
  title?: string;
  customColor?: string;
  children?: React.ReactNode;
  color?: keyof MyTheme["colors"]; // Using keyof to refer to theme color keys
};

export const Typography: React.FC<TypographyProps> = ({
  customColor,
  variant = "p",
  title,
  children,
  color = "primary",
}) => {
  const theme = useContext(ThemeContext);
  const Component = mappedStyles[variant];
  const colorProps = color ? theme?.colors[color] : customColor;

  return (
    <Component color={colorProps} title={title}>
      {children}
    </Component>
  );
};
