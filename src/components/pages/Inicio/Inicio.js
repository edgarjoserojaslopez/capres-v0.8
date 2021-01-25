import { CssBaseline } from "@material-ui/core";
import React from "react";
import CardsSection from "./CardsSection";
import useStyles from "./Inicio.styles";
import InicioHeroSection from "./InicioHeroSection";
const Inicio = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <InicioHeroSection />
      <CardsSection />
    </div>
  );
};

export default Inicio;
