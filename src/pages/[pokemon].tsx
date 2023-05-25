import { useRouter } from "next/router";
import Head from "next/head";
import { Spinner } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import usePokemon from "@/hook/usePokemon";
import Link from "next/link";
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
                        <Card sx={{ maxWidth: 500 }} className="centered-element">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={pokemon.sprites.other["official-artwork"].front_default}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" className="xap text-center capitalize" >
                                        {pokemon.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" className="text-center capitalize">
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">W#{pokemon.weight / 10}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">H#{pokemon.height * 10}</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ET#{pokemon.types.map(type => type.type.name).join(", ")}</span>
                                        <Link className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 no-underline hover:bg-black text-white" href='/'><i className="ri-arrow-right-line text-gray-700"></i></Link>
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