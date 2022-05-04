import React from "react";
import { makeStyles } from "@material-ui/styles";
import { color } from "@mui/system";

export function Pokemon({ pokemon = {}, ...props }) {
  const {
    name = "Pikachu",
    number = 25,
    color = "#F3D87C"
  } = pokemon;

  const useStyles = makeStyles({
    pokemon__container: {
      background: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "1em 4em",
      width: "20%",
      borderRadius: "16px",
      fontFamily: "Verdana, sans-serif",
      cursor: "pointer",

      "& h2": {
        color: "#546E7A",
        fontWeight: 700,
        fontSize: "1.8rem",
        margin: 0,
      },

      "&:hover": {
        "& $pokemon__number": {
          color,
        },
      },
    },
    pokemon__image: {
      maxWidth: "100%",
      zIndex: 1,
    },
    pokemon__number: {
      margin: 0,
      fontSize: "4em",
      color: "#CFD8DC",
      fontWeight: 700,
    },
  });
  const classes = useStyles();
  return (
    <div {...props} className={classes.pokemon__container}>
      <img className={classes.pokemon__image} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number}.png`} alt="Pikachu" />
      <h2>{name}</h2>
      <span className={classes.pokemon__number}># {number}</span>
    </div>
  );
}
