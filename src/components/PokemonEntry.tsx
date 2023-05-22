import { useRouter } from "next/router";

import Link from "next/link";
import { Spinner } from 'react-bootstrap'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import usePokemon from "@/hook/usePokemon";

export default function PokemonEntry({ name }: { name: string }) {
    const { pokemon, pokemonLoading } = usePokemon(name);

    return (

        <>
            
            <div className="d-flex flex-col align-item-center">
             
                {pokemonLoading && <Spinner animation="grow" />}
                {pokemon === null && <p>pokemon not found</p>}
                {pokemon &&
                    <>
                    <Link href={"/" }className="text-white decoration-transparent">
                        <Card sx={{ maxWidth: 345 }}>
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
                                       <p className="capitalize">types: {pokemon.types.map(type => type.type.name).join(", ")}</p>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Link>
                    </>
                }
            </div>
        </>
    );
}