import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import { CloseIcon, FilterListIcon } from "assets/icons";
import { Typography } from "../typography";
import Spacer from "../spacer";
import { InlineWrapper } from "../inline-wrapper";
import { FormGroup, FormControl } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "../button";
import Accordion from "../accordion";
import { useFilters, Filters } from "../../../context/FilterContext";

interface FilterOption {
  label: string;
  value: string; // Add value property for filtering
  ariaLabel: string;
  category: keyof Filters;
  defaultChecked?: boolean;
}

const FILTERS: { label: string; options: FilterOption[] }[] = [
  {
    label: "Product type",
    options: [
      {
        label: "Tote bag",
        value: "Tote bag",
        ariaLabel: "Tote bag",
        category: "typeOfProduct",
      },
      {
        label: "T-Shirt",
        value: "T-Shirt",
        ariaLabel: "T-Shirt",
        category: "typeOfProduct",
      },
      {
        label: "Sticker",
        value: "sticker",
        ariaLabel: "Sticker",
        category: "typeOfProduct",
      },
    ],
  },
  {
    label: "Size",
    options: [
      { label: "S", value: "S", ariaLabel: "Size S", category: "size" },
      { label: "M", value: "M", ariaLabel: "Size M", category: "size" },
      { label: "L", value: "L", ariaLabel: "Size L", category: "size" },
      {
        label: "Oversize",
        value: "Oversize",
        ariaLabel: "Size Oversize",
        category: "size",
      },
    ],
  },
  {
    label: "Color",
    options: [
      {
        label: "Black",
        value: "black",
        ariaLabel: "Color Black",
        category: "color",
      },
      {
        label: "White",
        value: "white",
        ariaLabel: "Color White",
        category: "color",
      },
      { label: "Red", value: "red", ariaLabel: "Color Red", category: "color" },
      {
        label: "Beige",
        value: "beige",
        ariaLabel: "Color Beige",
        category: "color",
      },
    ],
  },
  {
    label: "Collection",
    options: [
      {
        label: "Divertimento",
        value: "divertimento",
        ariaLabel: "Divertimento",
        category: "collection",
      },
      {
        label: "Virtuoso",
        value: "virtuoso",
        ariaLabel: "Virtuoso",
        category: "collection",
      },
      {
        label: "Scherzo",
        value: "scherzo",
        ariaLabel: "Scherzo",
        category: "collection",
      },
      {
        label: "Practice Etiquette",
        value: "etiquette",
        ariaLabel: "Practice Etiquette",
        category: "collection",
      },
    ],
  },
];

export const FilterDrawer: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { filters, setFilters, clearFilters } = useFilters();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleFilterChange =
    (filterCategory: keyof Filters, filterValue: string) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      setFilters((prevFilters) => {
        const newFilters = { ...prevFilters };
        if (checked) {
          newFilters[filterCategory] = [
            ...newFilters[filterCategory],
            filterValue,
          ];
        } else {
          newFilters[filterCategory] = newFilters[filterCategory].filter(
            (item) => item !== filterValue
          );
        }
        return newFilters;
      });
    };

  const DrawerList = (
    <Box sx={{ width: 350, m: "24px" }} role="presentation">
      <InlineWrapper justifyContent="space-between">
        <Typography variant="page-subtitle" color="systemDark">
          Filter
        </Typography>
        <InlineWrapper>
          <Box
            onClick={clearFilters}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            <Typography variant="tags" color="systemDark">
              Clear all
            </Typography>
          </Box>
          <Spacer x={8} />
          <Button onClick={toggleDrawer(false)} variant="none">
            <CloseIcon />
          </Button>
        </InlineWrapper>
      </InlineWrapper>
      <div>
        {FILTERS.map((filter) => (
          <React.Fragment key={filter.label}>
            <FormControl
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
                            checked={filters[option.category].includes(
                              option.value
                            )}
                            onChange={handleFilterChange(
                              option.category,
                              option.value
                            )}
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                }
              />
            </FormControl>
            <Divider />
            <Spacer y={4} />
          </React.Fragment>
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
