import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  links: {
    textDecoration: "none",
    marginRight: "0.8rem",
    cursor: "pointer",
    "&:hover": {
      fontWeight: 500,
      color: "#d32f2f",
    },
  },
  sideNavLink: {
    "&:hover": {
      textTransform: "uppercase",
      transition: "text-transform 3s ease-in-out",
    },
  },
}));

export const CustomLink = (props) => {
  const classes = useStyles();

  return (
    <Link
      className={classes.links}
      to={props.path}
      color={props.color || "#161617"}
    >
      {props.children}
    </Link>
  );
};

export const SideLink = (props) => {
  const classes = useStyles();

  return (
    <Link className={clsx(classes.links, classes.sideNavLink)} to={props.path}>
      {props.children}
    </Link>
  );
};
