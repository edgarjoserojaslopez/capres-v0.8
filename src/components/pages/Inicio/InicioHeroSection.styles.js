import { makeStyles } from "@material-ui/core/styles";
import bgImage from "../../../assets/images/img6.jpg";
export default makeStyles((theme) => ({
  root: {
    fontFamily: "Rubik",
    background: `url(${bgImage}) no-repeat center center fixed`,
    backgroundSize: "cover",
    backgroundPosition: "revert",
    minHeight: "calc(100vh - var(--vh-offset))",
    backgroundRepeat: "no-repeat",
    height: "100vh",

    position: "relative",
    zIndex: "1",
    backgroundAttachment: "scroll",
    overFlow: "hidden",
  },
  bgHeadingTextRoot0: {
    fontFamily: "Rubik",
    fontWeight: "700" /* theme.typography.fontWeightBold, */,
    /* position: "absolute", */
    position: "absolute",
    top: "35%",
    left: "12%",
    /* transform: "translate(-50%,-50%)", */
    color: "#0077b6",
  },

  bgHeadingTextRoot1: {
    fontFamily: "Rubik",
    fontWeight: theme.typography.fontWeightBold,
    /* position: "absolute", */
    position: "absolute",
    top: "47%",
    left: "12%",
    /*  transform: "translate(-50%,-50%)", */
    color: "#0077b6",
  },

  bgCaptionTextRoot: {
    fontFamily: "Rubik",
    fontWeight: theme.typography.fontWeightBold,
    position: "absolute",
    top: "60%",
    left: "15%",
    color: "#0077b6",
  },
  buttonsRoot: {
    position: "absolute",
    top: "75%",
  },
  gridContainer: {
    maxWidth: "500px",
    marginLeft: "15%",
    alignContent: "center",
  },
}));
