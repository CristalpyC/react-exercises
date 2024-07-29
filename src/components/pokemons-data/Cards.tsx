import { PokeData, pokeData, PokeDataProps } from "./pokeData";

export const Cards = (props: PokeDataProps) => {
  return (
    <div>
      {props.loading === true ? (
        <p className="mt-5 bg-blue-400">Loading...</p>
      ) : (
        <div>
          {props.data &&
            props.data.map((items: PokeData, index) => (
              <div key={index}>
                <p className="mb-2 shadow-sm p-2 bg-blue-200 text-black mt-3">
                  {items.name}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export const PokeCards = pokeData(Cards);
