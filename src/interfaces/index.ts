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
  levelUpMoves: {
    name: string;
    description: string;
    typing: string;
    type: string;
    power?: number;
    accuracy?: number;
  };
  machineMoves: {
    name: string;
    description: string;
    typing: string;
    type: string;
    power?: number;
    accuracy?: number;
  };
  tutorMoves: {
    name: string;
    description: string;
    typing: string;
    type: string;
    power?: number;
    accuracy?: number;
  };
  eggMoves: {
    name: string;
    description: string;
    typing: string;
    type: string;
    power?: number;
    accuracy?: number;
  };
  thumbnail: string;
  shinyThumbnail?: string;
  dexEntry: string;
  generation: string;
  _id: string;
}

export default PokemonProperties;
