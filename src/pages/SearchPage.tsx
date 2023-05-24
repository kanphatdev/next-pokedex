import { useState } from 'react';
import { Container, TextField, Grid, Card, CardContent, Typography, CardMedia, Button } from '@mui/material';

export default function SearchPage({ pokemons }) {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredPokemons = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pokemon.id.toString().includes(searchTerm)
    );

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };

    return (
        <Container>
            <input
                type="text"
                placeholder="Search Pokemon"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full sm:w-48 p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />

            <Grid container spacing={2}>
                {filteredPokemons.map(pokemon => (
                    <Grid item key={pokemon.name} xs={12} sm={6} md={4} lg={3}>
                        <Card className="bg-white">
                            <CardMedia
                                component="img"
                                height="140"
                                image={pokemon.image}
                                alt={pokemon.name}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" className="capitalize">
                                    {pokemon.name}
                                </Typography>
                                <Typography color="text.secondary">
                                    ID: {pokemon.id}
                                </Typography>
                                <Button size="small" className='text-black' href={pokemon.name}>
                                    detail
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export async function getStaticProps() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100');
    const data = await response.json();
    const pokemons = data.results.map((pokemon, index) => ({
        id: index + 1,
        name: pokemon.name,
        height: '',
        weight: '',
        image: '',
    }));

    for (const pokemon of pokemons) {
        const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
        const pokemonData = await pokemonResponse.json();
        pokemon.height = pokemonData.height;
        pokemon.weight = pokemonData.weight;
        pokemon.image = pokemonData.sprites.other['official-artwork'].front_default;
    }

    return {
        props: {
            pokemons,
        },
    };
}
