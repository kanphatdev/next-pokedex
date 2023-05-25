import { useState } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import Link from 'next/link';
import Navbar from './Nav';
interface Pokemon {
  name: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

interface PokedexProps {
  pokemonList: Pokemon[];
}

export default function Pokedex({ pokemonList }: PokedexProps) {
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);

  const handlePokemonClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
  };

  return (
    
    <div className="p-4">
   <Navbar/>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-3">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.name} className="max-w-md " onClick={() => handlePokemonClick(pokemon)}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="text-center capitalize">
                  {pokemon.name}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" className="text-black" href={pokemon.name}>
                Detail
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      {selectedPokemon && (
        <div className="mt-8">
          <h2 className="text-xl font-bold">{selectedPokemon.name}</h2>
          <img src={selectedPokemon.sprites.other['official-artwork'].front_default} alt={selectedPokemon.name} />
        </div>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
  const data = await res.json();

  const pokemonList: Pokemon[] = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
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
