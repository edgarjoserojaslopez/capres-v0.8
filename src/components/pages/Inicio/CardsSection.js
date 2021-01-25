import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fade, makeStyles } from "@material-ui/core/styles";
import cards from "./CardData";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

/* import CardItem from "./CardItem"; */
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8, 0, 6),
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: "20px",
    width: "100%",
    alignItems: "center",
    justifyItems: "center",
  },
  heroContent: {
    backgroundColor: fade(theme.palette.secondary.light, 0.7),

    padding: theme.spacing(8, 0, 6),
  },
  textRoot: {
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  },
  textRoot1: {
    color: theme.palette.primary.main,
    fontWeight: "light",
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  itemRoot: {},
}));

const CardsSection = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Typography
            className={classes.textRoot}
            component="h1"
            variant="h2"
            align="center"
            /* color="textPrimary" */
            gutterBottom
          >
            Nuestros Servicios
          </Typography>
          <Typography
            className={classes.textRoot1}
            variant="h5"
            align="center"
            /* color="textSecondary" */
            paragraph
          >
            A continuación se presentan los diferentes servicios que actualmente
            ofrece CAPRES
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={4} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">
                  Main call to action
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.alt} xs={12} sm={6} md={4}>
              <Card key={card} className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={card.alt}
                    height="140"
                    image={card.image}
                    title={card.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.heading}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {card.caption}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    {card.buttonLabel}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/*   </div> */}
    </>
  );
};

export default CardsSection;
