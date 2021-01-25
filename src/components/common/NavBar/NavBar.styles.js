import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  appBarRoot: {
    color: "#afafaf",
    /* background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", */
    /* background: theme.palette.grey[50], */
    /* justifyItems: "space-around", */
    background: "rgba(255,255,255,0.75)",
    alignContent: "center",
    position: "absolute",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: "Rubik",
    fontWeight: theme.typography.fontWeightMedium,
    flexGrow: 1,
    /* marginRight: "1rem", */
    cursor: "pointer",
    marginInline: "10px",
    color: theme.palette.grey[500],
    "&:hover": {
      color: theme.palette.primary.dark /* "#0077b6" */,
    },
    /* color: theme.palette */
    textDecoration: "none",
    fontSize: "16px",
  },
  toolBarRoot: {
    /* flexGrow: 1, */
    justifyContent: "space-between",
    alignContent: "center",
  },
  menuItemRoot: {
    display: "flex",
    /* justifyItems: "space-around", */
    justifySelf: "start",
  },
  logoImg: {
    maxWidth: "80px",
    padding: "5px",
  },
  typographyRoot: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  anchorRoot: {
    textDecoration: "none",
    color: theme.palette.grey[500],
  },
  label: {
    color: "#9e9e9e",
    "&:hover": {
      color: "#FFF",
      /*  color: theme.palette.secondary.light, */
    },
  },
  buttonRoot: {
    marginRight: "10px",
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      /*  color: theme.palette.secondary.light, */
    },
  },
}));
