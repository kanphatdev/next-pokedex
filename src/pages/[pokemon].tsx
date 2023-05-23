import { useRouter } from "next/router";
import Head from "next/head";
import { Spinner } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import usePokemon from "@/hook/usePokemon";
import { Button } from "@mui/material";
export default function PokemonDetailsPage() {
    const router = useRouter();
    const pokemonName = router.query.pokemon?.toString() || "";
    const { pokemon, pokemonLoading } = usePokemon(pokemonName);

    return (

        <>
            <Head>
                <title>{`Create Next App ${pokemon?.name}`}</title>
            </Head>
            <div className="d-flex flex-col align-item-center">

                {pokemonLoading && <Spinner animation="grow" />}
                {pokemon === null && <p>Pokemon not found</p>}
                {pokemon &&
                    <>
                        <Card sx={{ maxWidth: 500 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={pokemon.sprites.other["official-artwork"].front_default}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="xap">
                                    {pokemon.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </>
                }
            </div>
        </>
    );
}