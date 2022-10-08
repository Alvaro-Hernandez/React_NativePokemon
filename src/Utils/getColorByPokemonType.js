import { POKEMON_TYPE_COLORS } from "./Constants";

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];

export default getColorByPokemonType;