 export interface cards {
  id:string,
  name: string,
  nationalPokedexNumber: number,
  imageUrl: string,
  imageUrlHiRes: string,
  types: Array<string>,
  supertype: string,
  subtype: string,
  evolvesFrom: string,
  hp: string,
  number: string,
  artist: string,
  rarity: string,
  series: string,
  set: string,
  setCode: string,
  attacks: attack[],
  weaknesses: weakness[],
}

interface attack {
  cost: Array<string>,
  name: string,
  text: string,
  damage: number,
}

interface weakness {
  type: string,
  values: string
}

export interface listaPokemon {
    cards: cards[]
}
