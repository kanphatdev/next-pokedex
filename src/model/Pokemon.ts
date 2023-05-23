export interface PokemonPage{
    results: { name: string }[],
    next: string | null,
    previous: string | null,
}
export interface Pokemon{
    id: number;
    name:string,
    types:{
        type:{
            name:string
        }
    }[],
weight: number,
height: number,
sprites:{
    other: {
        "official-artwork": {
            front_default: string,
        }
    }
}
abilities: string[];
}