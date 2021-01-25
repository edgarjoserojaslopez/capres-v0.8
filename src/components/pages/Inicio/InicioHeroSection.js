import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./InicioHeroSection.styles";

const InicioHeroSection = () => {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <div>
        <span>
          <Typography className={classes.bgHeadingTextRoot0} variant="h1">
            Bienvenidos a
          </Typography>
        </span>
        <span>
          <Typography className={classes.bgHeadingTextRoot1} variant="h1">
            CAPRES.
          </Typography>
        </span>
        <span>
          <Typography className={classes.bgCaptionTextRoot} variant="h3">
            Estamos para servirte.
          </Typography>
        </span>
        <div>
          <Grid
            container
            className={classes.gridContainer}
            spacing={2}
            align="center"
            justify="center"
          >
            <Grid item sm={12} md={6}>
              <Button
                className={classes.buttonsRoot}
                variant="contained"
                color="primary"
              >
                Ya estoy registrado
              </Button>
            </Grid>
            <Grid item sm={12} md={6}>
              <Button
                className={classes.buttonsRoot}
                variant="outlined"
                color="primary"
              >
                No tengo una cuenta
              </Button>
            </Grid>
          </Grid>
        </div>
      </div>
    </section>
  );
};

export default InicioHeroSection;
