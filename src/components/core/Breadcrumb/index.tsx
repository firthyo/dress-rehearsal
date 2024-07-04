import React from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_BY_ID } from "graphql/product/getProducts";

type Props = {
  lastPath: string;
};

export const Breadcrumb: React.FC<Props> = ({ lastPath }) => {
  const location = useLocation();
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID);

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link
        component={RouterLink}
        to="/"
        style={{
          color: "black",
          textDecoration: "underline",
          textDecorationColor: "black",
        }}
      >
        Home
      </Link>
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {lastPath ? lastPath : value}
          </Typography>
        ) : (
          <Link
            component={RouterLink}
            to={to}
            key={to}
            style={{
              color: "black",
              textDecoration: "underline",
              textDecorationColor: "black",
            }}
          >
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default Breadcrumb;
