import { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

export default function Pokedex({ pokemonList }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} sx={{ maxWidth: 345 }} onClick={() => handlePokemonClick(pokemon)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {pokemon.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" href={pokemon.name}>
                Share
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {selectedPokemon && (
        <div className="pokemon-details">
          <h2>{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.other['official-artwork'].front_default} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await res.json();

  const pokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonRes = await fetch(pokemon.url);
      const pokemonData = await pokemonRes.json();
      return pokemonData;
    })
  );

  return {
    props: {
      pokemonList,
    },
  };
}
