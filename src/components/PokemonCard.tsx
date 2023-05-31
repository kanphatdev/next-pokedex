import { usePokemon } from "@/hook/useNewPokemon";
import Image from "next/image";

type PokedexCardProps = {
  pokemonKey: string;
};

export const PokemonCard: React.FC<PokedexCardProps> = (props) => {
  const { pokemonKey } = props;

  const { data } = usePokemon({ key: pokemonKey });

  return (
    <div
      className="rounded-lg text-black w-[104px] h-[108px] px-2 py-1 flex flex-col"
      style={{
        boxShadow: "0px 1px 3px 1px rgba(0, 0, 0, 0.2)",
      }}
    >
      <p className="text-right w-full text-[8px] text-[#666666]">
        #{data && data.id.toString().padStart(3, "0")}
      </p>
      <div className="flex-1 relative">
        {data && (
          <Image
            src={data.sprites.other["official-artwork"].front_default}
            alt={`pokemon#${pokemonKey}`}
            fill
            style={{
              objectFit: "contain",
            }}
          />
        )}
      </div>
      <p className="capitalize text-center text-[10px]">{data?.name}</p>
    </div>
  );
};
