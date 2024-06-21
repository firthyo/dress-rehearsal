import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import Checkbox from "@mui/material/Checkbox";

import { CloseIcon, FilterListIcon } from "assets/icons";
import { Typography } from "../typography";
import Spacer from "../spacer";
import { InlineWrapper } from "../inline-wrapper";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
import { FormGroup, FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../button";
import Accordion from "../accordion";

export const FilterDrawer = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const filters = [
    {
      label: "Product type",
      options: [
        { label: "Tote bag", ariaLabel: "Tote bag" },
        { label: "T-Shirt", ariaLabel: "T-Shirt", defaultChecked: true },
        { label: "Sticker", ariaLabel: "Sticker" },
      ],
    },
    {
      label: "Size",
      options: [
        { label: "S", ariaLabel: "Size S", defaultChecked: true },
        { label: "M", ariaLabel: "Size M" },
        { label: "L", ariaLabel: "Size L" },
        { label: "Oversize", ariaLabel: "Size Oversize" },
      ],
    },
    {
      label: "Color",
      options: [
        { label: "Black", ariaLabel: "Color Black", defaultChecked: true },
        { label: "White", ariaLabel: "Color White" },
        { label: "Red", ariaLabel: "Color Red" },
        { label: "Beige", ariaLabel: "Color Beige" },
      ],
    },
    {
      label: "Collection",
      options: [
        {
          label: "Divertimento",
          ariaLabel: "Divertimento",
          defaultChecked: true,
        },
        { label: "Virtuoso", ariaLabel: "Virtuoso" },
        { label: "Scherzo", ariaLabel: "Scherzo" },
        { label: "Practice Etiquette", ariaLabel: "Practice Etiquette" },
      ],
    },
  ];

  const DrawerList = (
    <Box sx={{ width: 350, m: "24px" }} role="presentation">
      <InlineWrapper justifyContent="space-between">
        <Typography variant="page-subtitle" color="systemDark">
          Filter
        </Typography>
        <InlineWrapper>
          <Typography variant="tags" color="systemDark">
            Clear all
          </Typography>
          <Spacer x={8} />
          <Button onClick={toggleDrawer(false)} variant="none">
            <CloseIcon />
          </Button>
        </InlineWrapper>
      </InlineWrapper>
      <div>
        {filters.map((filter) => (
          <>
            <FormControl
              key={filter.label}
              component="fieldset"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Accordion
                isOpenAsDefault={true}
                titleDivider={false}
                title={filter.label}
                children={
                  <FormGroup>
                    {filter.options.map((option) => (
                      <FormControlLabel
                        key={option.label}
                        control={
                          <Checkbox
                            aria-label={option.ariaLabel}
                            defaultChecked={option.defaultChecked}
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                }
              ></Accordion>

              {/* <FormLabel component="legend">{filter.label}</FormLabel> */}
            </FormControl>
            <Divider></Divider>

            <Spacer y={4}></Spacer>
          </>
        ))}
      </div>
    </Box>
  );

  return (
    <div>
      <Button variant="none" onClick={toggleDrawer(true)}>
        <FilterListIcon size={32} />
        <Spacer x={8} />
        <Typography color="systemDark" variant="p-articles">
          Filter
        </Typography>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
