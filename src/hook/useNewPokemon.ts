import { Pokemon } from "@/model/Pokemon";
import axios from "axios";
import useSWR from "swr";

export type UsePokemonConfig = {
  key: string;
  swrConfig?: any;
};

export const usePokemon = (config: UsePokemonConfig) => {
  const { key } = config;
  return useSWR(key, (key) =>
    axios
      .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${key}`)
      .then((res) => res.data)
  );
};
