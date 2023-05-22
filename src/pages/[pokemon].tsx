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
                        <Card sx={{ maxWidth: 345 }} className="centered-element">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={pokemon.sprites.other["official-artwork"].front_default}
                                    alt={pokemon.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="capitalize text-center">
                                        {pokemon.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <p className="capitalize">weight:{pokemon.weight / 10}</p>
                                        <p className="capitalize">height:{pokemon.height * 10}</p>
                                        <p className="capitalize">element: {pokemon.types.map(type => type.type.name).join(", ")}</p>
                                    </Typography>
                                    <Button size="small" color="primary" className='text-black' href='/'>
                                        back
                                    </Button>
                                </CardContent>

                            </CardActionArea>
                        </Card>

                    </>
                }
            </div>
        </>
    );
}