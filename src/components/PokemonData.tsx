import React from "react";
import { WithDataFetchProps, withDatFetch } from "./withDatFetch"

const PokemonData: React.FC<WithDataFetchProps> = (props) => {
    console.log(props)
  return (
    <div>PokemonData</div>
  )
}

export const DataComponent = withDatFetch(PokemonData);
