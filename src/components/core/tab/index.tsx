import React, { useCallback, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Header, Wrapper } from "./styles";
import TabNavItem from "components/core/navItem";
import Spacer from "components/core/spacer";

export type TabProps = {
  name: string;
  datacy?: string;
  content: () => JSX.Element;
};

type Props = {
  active?: number;
  contentMargin?: number;
  items: TabProps[];
  onChange?(active: number): void;
  variant?: "regular" | "grouped" | "modal";
  background?: "FILLED" | "EMPTY";
};

export const Tabs: React.FC<Props> = ({
  active = 0,
  contentMargin = 20,
  items,
  variant = "regular",
  onChange,
  background = "EMPTY",
}) => {
  const [activeTab, setActiveTab] = useState(active);

  const handleOnClickTab = useCallback(
    (index: number) => {
      setActiveTab(index);
      onChange && onChange(index);
    },
    [onChange]
  );

  const navItems = useMemo(
    () =>
      items.map((item, index) => (
        <TabNavItem
          key={index}
          name={item.name}
          datacy={item.datacy}
          isActive={index === activeTab}
          onClick={() => handleOnClickTab(index)}
          background={background}
        />
      )),
    [activeTab, handleOnClickTab, items, background]
  );

  return (
    <Wrapper>
      <Header variant={variant}>{navItems}</Header>
      <Spacer y={contentMargin} />
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {items[activeTab].content()}
        </motion.div>
      </AnimatePresence>
    </Wrapper>
  );
};

export default Tabs;
