import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import heroImg from "../../../assets/images/img-10.jpg";
import ContactoForm from "./ContactoForm";
import { Button, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    /* backgroundColor: theme.palette.background.paper, */
    backgroundImage: `url(${heroImg})`,
    padding: theme.spacing(12, 4, 10),
  },

  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    maxWidth: "80%",
  },
  pageContent: {
    "& .MuiTypography-h4": {
      textAlign: "center",
    },
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Contacto
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            ></Typography>
          </Container>
          {/* End hero unit */}
        </div>
        <Container className={classes.cardGrid} maxWidth="lg">
          <Paper className={classes.pageContent}>
            <Typography variant="h4">Evíanos tus inquietudes</Typography>
            <ContactoForm />
            <Button
              type="submit"
              variant="contained"
              color="inherit"
              className={classes.button}
            >
              Enviar
            </Button>
          </Paper>
        </Container>
      </main>
    </React.Fragment>
  );
}
