interface PokemonProperties {
  name: string;
  dexNumber: number;
  type: [string];
  baseStats: {
    hp: number;
    atk: number;
    def: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
  };
  abilities: [
    {
      name: string;
      description: string;
      _id: string;
    }
  ];
  hiddenAbility: {
    name: string;
    description: string;
    _id: string;
  };
  levelUpMoves: [
    {
      _id: MoveProperties;
      level: number;
    }
  ];
  machineMoves: [MoveProperties];
  tutorMoves: [MoveProperties];
  eggMoves: [MoveProperties];
  thumbnail: string;
  shinyThumbnail?: string;
  dexEntry: string;
  generation: string;
  _id: string;
}

interface AbilityProperties {
  name: string;
  description: string;
  _id: string;
}
interface MoveProperties {
  name: string;
  description: string;
  typing: string;
  type: string;
  power?: number;
  accuracy?: number;
  _id: string;
}

interface ItemProperties {
  name: string;
  effect: string;
  _id: string;
  image: null | string;
}

export type { PokemonProperties, AbilityProperties, MoveProperties, ItemProperties };
