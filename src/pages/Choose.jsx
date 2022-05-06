import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/styles";
import { useNavigate } from "@tanstack/react-location";
import { Pokemon } from "pokemon/PokemonCard";
import pokeData from "pokemon/pokemons";

const pokemons = pokeData();

const useStyles = makeStyles({
  main__container: {
    minHeight: "100vh",
    background: "#ECEFF1",
    color: "#546E7A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    flexWrap:"nowrap",

    "& h1": {
      fontWeight: 700,
      fontSize: "2.5rem",
      margin: "2em",
    },
  },
  choose__container: {
    //   height: "100vh",
    background: "#ECEFF1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "2em",
    flexWrap:"wrap"
  },
});

export function Choose() {
  const classes = useStyles();
  const navigate = useNavigate();

  const onClick = (pokemonName) => {
    navigate({ to: `./evolutions/${pokemonName}`, replace: false });
  };

  const starters = ["pikachu", "riolu", "treecko", "torchic", "mudkip"];
  return (
    <Suspense>
      <section className={classes.main__container}>
        <h1>Choose your starter</h1>
        <div className={classes.choose__container}>
          {starters.map((pokemon) => (
            <Pokemon
              onClick={() => onClick(pokemon)}
              pokemon={pokemons[pokemon]}
              key={`${pokemon}-starter-card`}
            />
          ))}
        </div>
      </section>
    </Suspense>
  );
}
