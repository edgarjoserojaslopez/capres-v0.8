import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Hidden from "@material-ui/core/Hidden";
import logoCapres from "../../../assets/images/capres.jpg";
import useStyles from "./NavBar.styles";

export default function ButtonAppBar() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} position="static">
        <Toolbar className={classes.toolBarRoot}>
          <div>
            <Hidden mdUp>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Link to="/">
                <img className={classes.logoImg} src={logoCapres} alt="logo" />
              </Link>
            </Hidden>
          </div>
          <Hidden smDown>
            <div className={classes.menuItemRoot}>
              <Typography variant="h6">
                <Link to="/" className={classes.title}>
                  Inicio
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link className={classes.title} to="/nosotros">
                  Nosotros
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link className={classes.title} to="/socios">
                  Socios
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link className={classes.title} to="/servicios">
                  Servicios
                </Link>
              </Typography>
              <Typography variant="h6">
                <Link className={classes.title} to="/contacto">
                  Contacto
                </Link>
              </Typography>
            </div>
          </Hidden>

          <div>
            <Button
              classes={{ label: classes.label, root: classes.buttonRoot }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              classes={{ label: classes.label, root: classes.buttonRoot }}
              component={Link}
              to="/registro"
            >
              Registro
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
