export type itemTypes = {
  name: string;
  image: string;
}[];

export type subRecipe = {
  material: string;
  value: number;
  image: string;
};

export type recipeMaterial = {
  material: string;
  value: number;
  image: string;
  subRecipe?: subRecipe[];
};

export type recipe = {
  [key: string]: recipeMaterial[];
}[];
