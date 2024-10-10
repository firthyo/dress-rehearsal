import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { brown } from "@mui/material/colors";
import { Avatar, Divider, Typography } from "@mui/material";
import FavoritOutline from "assets/icons/common/favorit-outline";
import AccountIcon from "assets/icons/common/account";
import LocalShippingOutline from "assets/icons/common/local-shipping-outline";
import LogoutIcon from "assets/icons/common/logout";
import Spacer from "components/core/spacer";
import { useAuth } from "context/AuthContext";
import { useNavigate } from "react-router-dom";

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { logoutAuth, user } = useAuth(); // Use the authentication context

  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // setAnchorEl(event.currentTarget);
    navigate("/user-profile/profile");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dropdownContent = () => {
    return [
      {
        icon: <AccountIcon />,
        title: <Typography>Profile</Typography>,
        action: handleClose,
      },
      {
        icon: <LocalShippingOutline />,
        title: <Typography>My Orders</Typography>,
        action: handleClose,
      },
      {
        icon: <FavoritOutline />,
        title: <Typography>Wishlist</Typography>,
        action: handleClose,
      },
      {
        icon: <LogoutIcon />,
        title: <Typography>Logout</Typography>,
        action: logoutAuth,
      },
    ];
  };
  if (!user) {
    return <div>Loading...</div>; // or any other placeholder
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ bgcolor: brown[700], padding: 0 }}>
          {`${user?.firstName[0]}${user?.lastName[0]}  `}
        </Avatar>
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {dropdownContent().map((item, index) => (
          <>
            <MenuItem key={index} onClick={item.action} sx={{ width: 200 }}>
              {item.icon}
              <Spacer x={12} />

              <Typography variant="inherit">{item.title}</Typography>
            </MenuItem>
            {index === 2 && <Divider />}
          </>
        ))}
      </Menu>
    </div>
  );
};

export default ProfileMenu;
