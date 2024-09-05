import React, { useState } from "react";
import { Menu, MenuItem, Divider } from "@mui/material";
import Spacer from "components/core/spacer";
import Button from "../button";
import { Typography } from "../typography";

type MenuItemType = {
  icon?: React.ReactNode;
  title: React.ReactNode;
  action: () => void;
};

type DropdownMenuProps = {
  items: MenuItemType[];
  buttonText: React.ReactNode;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  items,
  buttonText,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="dropdown-button"
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="none"
      >
        <Typography variant="label-medium" color="systemDark">
          {buttonText}
        </Typography>
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "dropdown-button",
        }}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem onClick={item.action} sx={{ width: 200 }}>
              {item.icon && item.icon}

              <Spacer x={12} />
              <Typography variant="p">{item.title}</Typography>
            </MenuItem>
            {index < items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Menu>
    </div>
  );
};

export default DropdownMenu;
