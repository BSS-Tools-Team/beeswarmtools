import { itemTypes, recipe } from "./types";

// ITEMS //

export const inventoryItems: itemTypes = [
  {
    name: "Honey",
    image: "Honey.png",
  },
  {
    name: "Red Extract",
    image: "RedExtract.png",
  },
  {
    name: "Blue Extract",
    image: "BlueExtract.png",
  },
  {
    name: "Enzymes",
    image: "Enzymes.png",
  },
  {
    name: "Oil",
    image: "Oil.png",
  },
  {
    name: "Glue",
    image: "Glue.png",
  },
  {
    name: "Gumdrops",
    image: "Gumdrops.png",
  },
  {
    name: "Glitter",
    image: "Glitter.png",
  },
  {
    name: "Tropical Drink",
    image: "TropicalDrink.png",
  },
  {
    name: "Soft Wax",
    image: "SoftWax.png",
  },
  {
    name: "Hard Wax",
    image: "HardWax.png",
  },
  {
    name: "Swirled Wax",
    image: "SwirledWax.png",
  },
  {
    name: "Caustic Wax",
    image: "CausticWax.png",
  },
  {
    name: "Field Dice",
    image: "FieldDice.png",
  },
  {
    name: "Smooth Dice",
    image: "SmoothDice.png",
  },
  {
    name: "Loaded Dice",
    image: "LoadedDice.png",
  },
  {
    name: "Purple Potion",
    image: "PurplePotion.png",
  },
  {
    name: "Super Smoothies",
    image: "SuperSmoothie.png",
  },
  {
    name: "Turpentine",
    image: "Turpentine.png",
  },
  {
    name: "Comforting Vial",
    image: "ComfortingVial.jpg",
  },
  {
    name: "Invigorating Vial",
    image: "InvigoratingVial.jpg",
  },
  {
    name: "Motivating Vial",
    image: "MotivatingVial.jpg",
  },
  {
    name: "Refreshing Vial",
    image: "RefreshingVial.jpg",
  },
  {
    name: "Satisfying Vial",
    image: "SatisfyingVial.jpg",
  },
];

// MATERIALS //

export const inventoryMaterials: itemTypes = [
  {
    name: "Strawberries",
    image: "Strawberries.png",
  },
  {
    name: "Blueberries",
    image: "Blueberries.png",
  },
  {
    name: "Pineapples",
    image: "Pineapples.png",
  },
  {
    name: "Sunflower Seeds",
    image: "SunflowerSeeds.png",
  },
  {
    name: "Bitterberries",
    image: "Bitterberries.png",
  },
  {
    name: "Neonberries",
    image: "NeonBerries.png",
  },
  {
    name: "Coconuts",
    image: "Coconuts.png",
  },
  {
    name: "Moon Charms",
    image: "Moon.png",
  },
  {
    name: "Treats",
    image: "Treats.png",
  },
  {
    name: "Stingers",
    image: "Stingers.png",
  },
  {
    name: "Honeysuckle",
    image: "HoneySuckle.png",
  },
  {
    name: "Magic Bean",
    image: "MagicBean.png",
  },
  {
    name: "Royal Jelly",
    image: "RoyalJelly.png",
  },
  {
    name: "Star Jelly",
    image: "StarJelly.png",
  },
  {
    name: "Gold Eggs",
    image: "GoldEgg.png",
  },
  {
    name: "Diamond Eggs",
    image: "DiamondEgg.png",
  },
  {
    name: "Spirit Petal",
    image: "SpiritPetal.png",
  },
];

// MASKS //

export const masks: itemTypes = [
  {
    name: "Honey",
    image: "HoneyMask.png",
  },
  {
    name: "Bubble",
    image: "BubbleMask.png",
  },
  {
    name: "Fire",
    image: "FireMask.png"
  },
  {
    name: "Gummy",
    image: "GummyMask.png",
  },
  {
    name: "Diamond",
    image: "DiamondMask.png",
  },
  {
    name: "Demon",
    image: "DemonMask.png",
  },
];

export const maskRecipes: recipe = [
  {
    honey: [
      { material: "Honey", value: 100000000, image: "Honey.png" },
      { material: "Treats", value: 9999, image: "Treats.png" },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 25,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Gold Eggs", value: 5, image: "GoldEgg.png" },
    ],
  },
  {
    bubble: [
      { material: "Honey", value: 100000000, image: "Honey.png" },
      { material: "Blueberries", value: 500, image: "Blueberries.png" },
      {
        material: "Blue Extract", 
        value: 50, 
        image: "BlueExtract.png", 
        subRecipe: [
          {
            material: "Blueberries", 
            value: 50, 
            image: "Blueberries.png", 
          }, 
          {
            material: "Royal Jelly", 
            value: 10, 
            image: "RoyalJelly.png", 
           },
          ],
      }, 
      {
         material: "Oil",
        value: 25,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 15,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
  {
    fire: [
      { material: "Honey", value: 100000000, image: "Honey.png" },
      { material: "Strawberries", value: 500, image: "Strawberries.png" },
      {
        material: "Red Extract", 
        value: 50, 
        image: "RedExtract.png", 
        subRecipe: [
          {
            material: "Strawberries", 
            value: 50, 
            image: "Strawberries.png", 
          },
          {
            material: "Royal Jelly", 
            value: 10, 
            image: "RoyalJelly.png", 
           },
         ],
      }, 
      {
         material: "Enzymes",
        value: 25,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
            {
        material: "Glue",
        value: 15,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 250,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 100,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
  {
    diamond: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 150,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Diamond Eggs", value: 5, image: "DiamondEgg.png" },
    ],
  },
  {
    demon: [
      { material: "Honey", value: 5000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 150,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },

      { material: "Stingers", value: 500, image: "Stingers.png" },
    ],
  },
];

// TOOLS //

export const tools: itemTypes = [
  {
    name: "Petal Wand",
    image: "PetalWand.png",
  },
  {
    name: "Tide Popper",
    image: "TidePopper.png",
  },
  {
    name: "Dark Scythe",
    image: "DarkScythe.png",
  },
  {
    name: "Gummy Baller",
    image: "GummyBaller.png",
  },
];

export const toolRecipes: recipe = [
  {
    petal: [
      { material: "Honey", value: 1500000000, image: "Honey.png" },
      {
        material: "Enzymes",
        value: 75,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      {
        material: "Star Jelly",
        value: 10,
        image: "StarJelly.png",
      },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
  {
    tide: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 1500,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 150,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 75,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Purple Potion",
            value: 6,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
  {
    scythe: [
      { material: "Honey", value: 2500000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 1500,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 100,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 200, image: "Stingers.png" },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 10000000000000, image: "Honey.png" },
      {
        material: "Gumdrops",
        value: 2500,
        image: "Gumdrops.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 3,
            image: "Blueberries.png",
          },
          {
            material: "Strawberries",
            value: 3,
            image: "Strawberries.png",
          },
          {
            material: "Pineapples",
            value: 3,
            image: "Pineapples.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 1500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 50,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 50,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Tropical Drink",
            value: 6,
            image: "TropicalDrink.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 5,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honeysuckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 100,
            image: "StarJelly.png",
          },
        ],
      },
    ],
  },
];

// BAGS //

export const bags: itemTypes = [
  {
    name: "Coconut Canister",
    image: "CoconutCanister.png",
  },
];

export const bagRecipes: recipe = [
  {
    coconut: [
      { material: "Honey", value: 25000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },

      {
        material: "Red Extract",
        value: 150,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 150,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 150,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
];

// GUARDS //

export const guards: itemTypes = [
  {
    name: "Bucko",
    image: "BuckoGuard.png",
  },
  {
    name: "Riley",
    image: "RileyGuard.png",
  },
  {
    name: "Cobalt",
    image: "CobaltGuard.png",
  },
  {
    name: "Crimson",
    image: "CrimsonGuard.png",
  },
];

export const guardRecipes: recipe = [
  {
    bucko: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Blueberries", value: 100, image: "Blueberries.png" },
      {
        material: "Blue Extract",
        value: 10,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Moon Charms", value: 75, image: "Moon.png" },
    ],
  },
  {
    riley: [
      { material: "Honey", value: 30000000, image: "Honey.png" },
      { material: "Strawberries", value: 100, image: "Strawberries.png" },
      {
        material: "Red Extract",
        value: 10,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 5,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 25, image: "Stingers.png" },
    ],
  },
  {
    cobalt: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 100,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
  {
    crimson: [
      { material: "Honey", value: 200000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 100,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 50,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 25,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Stingers", value: 100, image: "Stingers.png" },
    ],
  },
];

// BELTS //

export const belts: itemTypes = [
  {
    name: "Mondo",
    image: "MondoBelt.png",
  },
  {
    name: "Honey",
    image: "HoneycombBelt.png",
  },
  {
    name: "Petal",
    image: "PetalBelt.png",
  },
  {
    name: "Coconut",
    image: "CoconutBelt.png",
  },
];

export const beltRecipes: recipe = [
  {
    mondo: [
      { material: "Honey", value: 12400000, image: "Honey.png" },
      { material: "Pineapples", value: 150, image: "Pineapples.png" },
      { material: "Sunflower Seeds", value: 150, image: "SunflowerSeeds.png" },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    honeycomb: [
      { material: "Honey", value: 75000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 50,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 25,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Enzymes",
        value: 50,
        image: "Enzymes.png",
        subRecipe: [
          {
            material: "Pineapples",
            value: 50,
            image: "Pineapples.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
    ],
  },
  {
    petal: [
      { material: "Honey", value: 15000000000, image: "Honey.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 50,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      { material: "Star Jelly", value: 25, image: "StarJelly.png" },
      { material: "Spirit Petal", value: 1, image: "SpiritPetal.png" },
    ],
  },
  {
  coconut: [
    { material: "Honey", value: 7500000000000, image: "Honey.png" },
    { material: "Coconuts", value: 500, image: "Coconuts.png" },
    {
      material: "Tropical Drink",
      value: 1500,
      image: "TropicalDrink.png",
      subRecipe: [
        {
          material: "Coconuts",
          value: 10,
          image: "Coconuts.png",
        },
        {
          material: "Oil",
          value: 2,
          image: "Oil.png",
        },
        {
          material: "Enzymes",
          value: 2,
          image: "Enzymes.png",
        },
      ],
    },
    {
      material: "Purple Potion",
      value: 200,
      image: "PurplePotion.png",
      subRecipe: [
        {
          material: "Neonberries",
          value: 3,
          image: "NeonBerries.png",
        },
        {
          material: "Red Extract",
          value: 3,
          image: "RedExtract.png",
        },
        {
          material: "Blue Extract",
          value: 3,
          image: "BlueExtract.png",
        },
        {
          material: "Glue",
          value: 3,
          image: "Glue.png",
        },
      ],
    },
    {
      material: "Hard Wax",
      value: 200,
      image: "HardWax.png",
      subRecipe: [
        {
          material: "Soft Wax",
          value: 3,
          image: "SoftWax.png",
        },
        {
          material: "Enzymes",
          value: 3,
          image: "Enzymes.png",
        },
        {
          material: "Bitterberries",
          value: 33,
          image: "Bitterberries.png",
        },
        {
          material: "Royal Jelly",
          value: 33,
          image: "RoyalJelly.png",
        },
      ],
    },
    {
      material: "Turpentine",
      value: 3,
      image: "Turpentine.png",
      subRecipe: [
        {
          material: "Super Smoothies",
          value: 10,
          image: "SuperSmoothie.png",
        },
        {
          material: "Caustic Wax",
          value: 10,
          image: "CausticWax.png",
        },
        {
          material: "Honeysuckle",
          value: 1000,
          image: "HoneySuckle.png",
        },
        {
          material: "Star Jelly",
          value: 100,
          image: "StarJelly.png",
        },
      ],
    }
  ],
}

];
  
// BOOTS //

export const boots: itemTypes = [
  {
    name: "Beekeeper",
    image: "BeekeeperBoots.png",
  },
  {
    name: "Coconut",
    image: "CoconutClogs.png",
  },
  {
    name: "Gummy",
    image: "GummyBoots.png",
  },
];

export const bootRecipes: recipe = [
  {
    beekeeper: [
      { material: "Honey", value: 15000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 3,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 3,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 5,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Stingers", value: 10, image: "Stingers.png" },
    ],
  },
  {
    coconut: [
      { material: "Honey", value: 10000000000, image: "Honey.png" },
      { material: "Coconuts", value: 150, image: "Coconuts.png" },
      {
        material: "Glue",
        value: 100,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Oil",
        value: 100,
        image: "Oil.png",
        subRecipe: [
          {
            material: "Sunflower Seeds",
            value: 50,
            image: "SunflowerSeeds.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Tropical Drink",
        value: 50,
        image: "TropicalDrink.png",
        subRecipe: [
          {
            material: "Coconuts",
            value: 10,
            image: "Coconuts.png",
          },
          {
            material: "Oil",
            value: 2,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 2,
            image: "Enzymes.png",
          },
        ],
      },
    ],
  },
  {
    gummy: [
      { material: "Honey", value: 100000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 250,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Blue Extract",
        value: 250,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glue",
        value: 500,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 250,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
    ],
  },
];

// PLANTERS //

export const planters: itemTypes = [
  {
    name: "Blue",
    image: "BlueClayPlanter.png",
  },
  {
    name: "Red",
    image: "RedClayPlanter.png",
  },
  {
    name: "Tacky",
    image: "TackyPlanter.png",
  },
  {
    name: "Pesticide",
    image: "PesticidePlanter.png",
  },
  {
    name: "Hydroponic",
    image: "HydroponicPlanter.png",
  },
  {
    name: "Heat-Treated",
    image: "HeatTreatedPlanter.png",
  },
  {
    name: "Petal",
    image: "PetalPlanter.png",
  },
  {
    name: "Plenty",
    image: "PoPPlanter.png",
  },
];

export const planterRecipes: recipe = [
  {
    blue: [
      { material: "Honey", value: 10000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 15,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 5, image: "MagicBean.png" },
    ],
  },
  {
    red: [
      { material: "Honey", value: 10000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 15,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 5, image: "MagicBean.png" },
    ],
  },
  {
    tacky: [
      { material: "Honey", value: 50000000, image: "Honey.png" },
      {
        material: "Soft Wax",
        value: 20,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 5,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Purple Potion",
        value: 1,
        image: "PurplePotion.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Red Extract",
            value: 3,
            image: "RedExtract.png",
          },
          {
            material: "Blue Extract",
            value: 3,
            image: "BlueExtract.png",
          },
          {
            material: "Glue",
            value: 3,
            image: "Glue.png",
          },
        ],
      },
      { material: "Magic Bean", value: 10, image: "MagicBean.png" },
    ],
  },
  {
    pesticide: [
      { material: "Honey", value: 750000000, image: "Honey.png" },
      { material: "Neonberries", value: 25, image: "NeonBerries.png" },
      {
        material: "Glue",
        value: 15,
        image: "Glue.png",
        subRecipe: [
          {
            material: "Gumdrops",
            value: 50,
            image: "Gumdrops.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 10,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 3,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 25, image: "MagicBean.png" },
    ],
  },
  {
    hydroponic: [
      { material: "Honey", value: 750000000000, image: "Honey.png" },
      {
        material: "Blue Extract",
        value: 750,
        image: "BlueExtract.png",
        subRecipe: [
          {
            material: "Blueberries",
            value: 50,
            image: "Blueberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Soft Wax",
        value: 500,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Caustic Wax",
        value: 25,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 1,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honeysuckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 100,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 75, image: "MagicBean.png" },
    ],
  },
  {
    heattreated: [
      { material: "Honey", value: 750000000000, image: "Honey.png" },
      {
        material: "Red Extract",
        value: 750,
        image: "RedExtract.png",
        subRecipe: [
          {
            material: "Strawberries",
            value: 50,
            image: "Strawberries.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Hard Wax",
        value: 150,
        image: "HardWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 3,
            image: "SoftWax.png",
          },
          {
            material: "Enzymes",
            value: 3,
            image: "Enzymes.png",
          },
          {
            material: "Bitterberries",
            value: 33,
            image: "Bitterberries.png",
          },
          {
            material: "Royal Jelly",
            value: 33,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 25,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Purple Potion",
            value: 6,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 1,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honeysuckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 100,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 75, image: "MagicBean.png" },
    ],
  },
  {
    petal: [
      { material: "Honey", value: 5000000000000, image: "Honey.png" },
      { material: "Neonberries", value: 25, image: "NeonBerries.png" },
      {
        material: "Soft Wax",
        value: 250,
        image: "SoftWax.png",
        subRecipe: [
          {
            material: "Honeysuckle",
            value: 5,
            image: "HoneySuckle.png",
          },
          {
            material: "Oil",
            value: 1,
            image: "Oil.png",
          },
          {
            material: "Enzymes",
            value: 1,
            image: "Enzymes.png",
          },
          {
            material: "Royal Jelly",
            value: 10,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 50,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Purple Potion",
            value: 6,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Glitter",
        value: 100,
        image: "Glitter.png",
        subRecipe: [
          {
            material: "Moon Charms",
            value: 25,
            image: "Moon.png",
          },
          {
            material: "Magic Bean",
            value: 1,
            image: "MagicBean.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 25,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 100, image: "MagicBean.png" },
    ],
  },
  {
    plenty: [
      { material: "Honey", value: 100000000000000, image: "Honey.png" },
      {
        material: "Caustic Wax",
        value: 100,
        image: "CausticWax.png",
        subRecipe: [
          {
            material: "Hard Wax",
            value: 5,
            image: "HardWax.png",
          },
          {
            material: "Enzymes",
            value: 5,
            image: "Enzymes.png",
          },
          {
            material: "Neonberries",
            value: 25,
            image: "NeonBerries.png",
          },
          {
            material: "Royal Jelly",
            value: 5252,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Swirled Wax",
        value: 100,
        image: "SwirledWax.png",
        subRecipe: [
          {
            material: "Soft Wax",
            value: 9,
            image: "SoftWax.png",
          },
          {
            material: "Hard Wax",
            value: 3,
            image: "HardWax.png",
          },
          {
            material: "Purple Potion",
            value: 6,
            image: "PurplePotion.png",
          },
          {
            material: "Royal Jelly",
            value: 3333,
            image: "RoyalJelly.png",
          },
        ],
      },
      {
        material: "Super Smoothies",
        value: 100,
        image: "SuperSmoothie.png",
        subRecipe: [
          {
            material: "Neonberries",
            value: 3,
            image: "NeonBerries.png",
          },
          {
            material: "Purple Potion",
            value: 3,
            image: "PurplePotion.png",
          },
          {
            material: "Star Jelly",
            value: 3,
            image: "StarJelly.png",
          },
        ],
      },
      {
        material: "Turpentine",
        value: 25,
        image: "Turpentine.png",
        subRecipe: [
          {
            material: "Super Smoothies",
            value: 10,
            image: "SuperSmoothie.png",
          },
          {
            material: "Caustic Wax",
            value: 10,
            image: "CausticWax.png",
          },
          {
            material: "Honeysuckle",
            value: 1000,
            image: "HoneySuckle.png",
          },
          {
            material: "Star Jelly",
            value: 100,
            image: "StarJelly.png",
          },
        ],
      },
      { material: "Magic Bean", value: 500, image: "MagicBean.png" },
    ],
  },
];

export const beeTypes = [
  "Rare",
  "Epic",
  "Legendary",
  "Mythic",
  "Event",
  "Mutations",
  "Beequips",
];

export const beeTypeDisplay = {
  rare: [
    { name: "Basic", id: "1", image: "BasicBee.png" },
    { name: "Bomber", id: "2", image: "BomberBee.png" },
    { name: "Brave", id: "3", image: "BraveBee.png" },
    { name: "Hasty", id: "4", image: "HastyBee.png" },
    { name: "Looker", id: "5", image: "LookerBee.png" },
    { name: "Stubborn", id: "6", image: "StubbornBee.png" },
    { name: "Bumble", id: "7", image: "BumbleBee.png" },
    { name: "Cool", id: "8", image: "CoolBee.png" },
    { name: "Rad", id: "9", image: "RadBee.png" },
    { name: "Rascal", id: "10", image: "RascalBee.png" },
  ],
  epic: [
    { name: "Honey", id: "11", image: "HoneyBee.png" },
    { name: "Commander", id: "12", image: "CommanderBee.png" },
    { name: "Demo", id: "13", image: "DemoBee.png" },
    { name: "Exhausted", id: "14", image: "ExhaustedBee.png" },
    { name: "Shocked", id: "15", image: "ShockedBee.png" },
    { name: "Bubble", id: "16", image: "BubbleBee.png" },
    { name: "Bucko", id: "17", image: "BuckoBee.png" },
    { name: "Frosty", id: "18", image: "FrostyBee.png" },
    { name: "Rage", id: "19", image: "RageBee.png" },
    { name: "Riley", id: "20", image: "RileyBee.png" },
    { name: "Fire", id: "21", image: "FireBee.png" },
  ],
  legendary: [
    { name: "Musical", id: "22", image: "MusicalBee.png" },
    { name: "Carpenter", id: "23", image: "CarpenterBee.png" },
    { name: "Lion", id: "24", image: "LionBee.png" },
    { name: "Baby", id: "25", image: "BabyBee.png" },
    { name: "Diamond", id: "26", image: "DiamondBee.png" },
    { name: "Ninja", id: "27", image: "NinjaBee.png" },
    { name: "Shy", id: "28", image: "ShyBee.png" },
    { name: "Demon", id: "29", image: "DemonBee.png" },
  ],
  mythic: [
    { name: "Vector", id: "30", image: "VectorBee.png" },
    { name: "Fuzzy", id: "31", image: "FuzzyBee.png" },
    { name: "Tadpole", id: "32", image: "TadpoleBee.png" },
    { name: "Bouyant", id: "33", image: "BouyantBee.png" },
    { name: "Precise", id: "34", image: "PreciseBee.png" },
    { name: "Spicy", id: "35", image: "SpicyBee.png" },
  ],
  event: [
    { name: "Bear", id: "36", image: "BearBee.png" },
    { name: "Tabby", id: "37", image: "TabbyBee.png" },
    { name: "Photon", id: "38", image: "PhotonBee.png" },
    { name: "Gummy", id: "39", image: "GummyBee.png" },
    { name: "Puppy", id: "40", image: "PuppyBee.png" },
    { name: "Windy", id: "41", image: "WindyBee.png" },
    { name: "Vicious", id: "42", image: "ViciousBee.png" },
    { name: "Festive", id: "43", image: "FestiveBee.png" },
    { name: "Cobalt", id: "44", image: "CobaltBee.png" },
    { name: "Crimson", id: "45", image: "CrimsonBee.png" },
    { name: "Digital", id: "46", image: "DigitalBee.png" },
  ],
  mutations: [
    { name: "attack", id: "47", image: "Mutations/Attack.png" },
    { name: "convertamount", id: "48", image: "Mutations/Convert Amount.png" },
    { name: "gatheramount", id: "49", image: "Mutations/Gather Amount.png" },
    { name: "energy", id: "50", image: "Mutations/Energy.png" },
    { name: "beeabilityrate", id: "51", image: "Mutations/Bee Ability Rate.png" },
    { name: "criticalchance", id: "52", image: "Mutations/Critical Chance.png" },
    { name: "instantconversion", id: "53", image: "Mutations/Instant Conversion.png" },
    { name: "movespeed", id: "54", image: "Mutations/Movespeed.png" },
  ],
  normal: [
    { name: "1Thimble", id: "55", image: "Beequips/Thimble.png" },
    { name: "1Sweatband", id: "56", image: "Beequips/Sweatband.png" },
    { name: "1Bandage", id: "57", image: "Beequips/Bandage.png" },
    { name: "2Thumbtack", id: "58", image: "Beequips/Thumbtack.png" },
    { name: "1CamoBandana", id: "59", image: "Beequips/CamoBandana.png" },
    { name: "2BottleCap", id: "60", image: "Beequips/BottleCap.png" },
    { name: "1Kazoo", id: "61", image: "Beequips/Kazoo.png" },
    { name: "2SmileySticker", id: "62", image: "Beequips/SmileySticker.png" },
    { name: "1Whistle", id: "63", image: "Beequips/Whistle.png" },
    { name: "2CharmBracelet", id: "64", image: "Beequips/CharmBracelet.png" },
    { name: "1Paperclip", id: "65", image: "Beequips/Paperclip.png" },
    { name: "3Beret", id: "66", image: "Beequips/Beret.png" },
    { name: "4BangSnap", id: "67", image: "Beequips/BangSnap.png" },
    { name: "5BeadLizard", id: "68", image: "Beequips/BeadLizard.png" },
    { name: "2PinkShades", id: "69", image: "Beequips/PinkShades.png" },
    { name: "1Lei", id: "70", image: "Beequips/Lei.png" },
    { name: "1DemonTalisman", id: "71", image: "Beequips/demon_talisman.png" },
    { name: "3CamphorLipBalm", id: "72", image: "Beequips/camphor_lip_balm.png" },
    { name: "1AutumnSunhat", id: "73", image: "Beequips/autumn_sunhat.png" },
    { name: "1RoseHeadband", id: "74", image: "Beequips/RoseHeadband.png" },
    { name: "3PinkEraser", id: "75", image: "Beequips/pink_eraser.png" },
    { name: "4CandyRing", id: "76", image: "Beequips/candy_ring.png" },
  ],
  beesmas: [
    { name: "1ElfCap", id: "77", image: "Beequips/ElfCap.png" },
    { name: "3SingleMitten", id: "78", image: "Beequips/SingleMitten.png" },
    { name: "2WarmScarf", id: "79", image: "Beequips/WarmScarf.png" },
    {
      name: "4PeppermintAntennas",
      id: "80",
      image: "Beequips/PeppermintAntennas.png",
    },
    { name: "6BeesmasTop", id: "81", image: "Beequips/BeesmasTop.png" },
    { name: "4Pinecone", id: "82", image: "Beequips/Pinecone.png" },
    { name: "1Icicles", id: "83", image: "Beequips/Icicles.png" },
    { name: "7BeesmasTreeHat", id: "84", image: "Beequips/BeesmasTreeHat.png" },
    { name: "8BubbleLight", id: "85", image: "Beequips/BubbleLight.png" },
    { name: "4SnowTiara", id: "86", image: "Beequips/SnowTiara.png" },
    { name: "5Snowglobe", id: "87", image: "Beequips/Snowglobe.png" },
    {
      name: "2ReindeerAntlers",
      id: "88",
      image: "Beequips/ReindeerAntlers.png",
    },
    { name: "3ToyHorn", id: "89", image: "Beequips/ToyHorn.png" },
    { name: "5PaperAngel", id: "90", image: "Beequips/PaperAngel.png" },
    { name: "4ToyDrum", id: "91", image: "Beequips/ToyDrum.png" },
    { name: "2LumpOfCoal", id: "92", image: "Beequips/LumpOfCoal.png" },
    { name: "6Poinsettia", id: "93", image: "Beequips/Poinsettia.png" },
    { name: "2ElectricCandle", id: "94", image: "Beequips/ElectricCandle.png" },
    { name: "1FestiveWreath", id: "95", image: "Beequips/FestiveWreath.png" },
    { name: "0Remove", id: "96", image: "Beequips/Remove.png" },
  ],
};

export const giftedBeeTypeDisplay = {
  rare: [
    { name: "★ Basic", id: "1", image: "Gifted/BasicBee.png" },
    { name: "★ Bomber", id: "2", image: "Gifted/BomberBee.png" },
    { name: "★ Brave", id: "3", image: "Gifted/BraveBee.png" },
    { name: "★ Hasty", id: "4", image: "Gifted/HastyBee.png" },
    { name: "★ Looker", id: "5", image: "Gifted/LookerBee.png" },
    { name: "★ Stubborn", id: "6", image: "Gifted/StubbornBee.png" },
    { name: "★ Bumble", id: "7", image: "Gifted/BumbleBee.png" },
    { name: "★ Cool", id: "8", image: "Gifted/CoolBee.png" },
    { name: "★ Rad", id: "9", image: "Gifted/RadBee.png" },
    { name: "★ Rascal", id: "10", image: "Gifted/RascalBee.png" },
  ],
  epic: [
    { name: "★ Honey", id: "11", image: "Gifted/HoneyBee.png" },
    { name: "★ Commander", id: "12", image: "Gifted/CommanderBee.png" },
    { name: "★ Demo", id: "13", image: "Gifted/DemoBee.png" },
    { name: "★ Exhausted", id: "14", image: "Gifted/ExhaustedBee.png" },
    { name: "★ Shocked", id: "15", image: "Gifted/ShockedBee.png" },
    { name: "★ Bubble", id: "16", image: "Gifted/BubbleBee.png" },
    { name: "★ Bucko", id: "17", image: "Gifted/BuckoBee.png" },
    { name: "★ Frosty", id: "18", image: "Gifted/FrostyBee.png" },
    { name: "★ Rage", id: "19", image: "Gifted/RageBee.png" },
    { name: "★ Riley", id: "20", image: "Gifted/RileyBee.png" },
    { name: "★ Fire", id: "21", image: "Gifted/FireBee.png" },
  ],
  legendary: [
    { name: "★ Musical", id: "22", image: "Gifted/MusicalBee.png" },
    { name: "★ Carpenter", id: "23", image: "Gifted/CarpenterBee.png" },
    { name: "★ Lion", id: "24", image: "Gifted/LionBee.png" },
    { name: "★ Baby", id: "25", image: "Gifted/BabyBee.png" },
    { name: "★ Diamond", id: "26", image: "Gifted/DiamondBee.png" },
    { name: "★ Ninja", id: "27", image: "Gifted/NinjaBee.png" },
    { name: "★ Shy", id: "28", image: "Gifted/ShyBee.png" },
    { name: "★ Demon", id: "29", image: "Gifted/DemonBee.png" },
  ],
  mythic: [
    { name: "★ Vector", id: "30", image: "Gifted/VectorBee.png" },
    { name: "★ Fuzzy", id: "31", image: "Gifted/FuzzyBee.png" },
    { name: "★ Tadpole", id: "32", image: "Gifted/TadpoleBee.png" },
    { name: "★ Bouyant", id: "33", image: "Gifted/BouyantBee.png" },
    { name: "★ Precise", id: "34", image: "Gifted/PreciseBee.png" },
    { name: "★ Spicy", id: "35", image: "Gifted/SpicyBee.png" },
  ],
  event: [
    { name: "★ Bear", id: "36", image: "Gifted/BearBee.png" },
    { name: "★ Tabby", id: "37", image: "Gifted/TabbyBee.png" },
    { name: "★ Photon", id: "38", image: "Gifted/PhotonBee.png" },
    { name: "★ Gummy", id: "39", image: "Gifted/GummyBee.png" },
    { name: "★ Puppy", id: "40", image: "Gifted/PuppyBee.png" },
    { name: "★ Windy", id: "41", image: "Gifted/WindyBee.png" },
    { name: "★ Vicious", id: "42", image: "Gifted/ViciousBee.png" },
    { name: "★ Festive", id: "43", image: "Gifted/FestiveBee.png" },
    { name: "★ Cobalt", id: "44", image: "Gifted/CobaltBee.png" },
    { name: "★ Crimson", id: "45", image: "Gifted/CrimsonBee.png" },
    { name: "★ Digital", id: "46", image: "Gifted/DigitalBee.png" },
  ],
};

export const HiveSlots = [
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
  { name: "", id: "0", image: "EmptyHive.png" },
];

export const toolSelection = [
  {
    name: "Hive planner",
    img: "Hive/Tools/Planner.png",
    path: "/hive-planner",
  },
  {
    name: "Recipe calculator",
    img: "Hive/Tools/Calculator.png",
    path: "/recipe-calculator",
  },
  {
    name: "Bond calculator",
    img: "Hive/Tools/Bond.png",
    path: "/bond-calculator",
  },
  {
    name: "Amulet Appraiser",
    img: "Hive/Tools/ComingSoon.png",
    path: "",
  },
];

export const bondExp = [
  {
    level: 1,
    total: 0,
    next: 10,
  },
  {
    level: 2,
    total: 10,
    next: 40,
  },
  {
    level: 3,
    total: 50,
    next: 200,
  },
  {
    level: 4,
    total: 250,
    next: 750,
  },
  {
    level: 5,
    total: 1000,
    next: 4000,
  },
  {
    level: 6,
    total: 5000,
    next: 15000,
  },
  {
    level: 7,
    total: 20000,
    next: 60000,
  },
  {
    level: 8,
    total: 80000,
    next: 270000,
  },
  {
    level: 9,
    total: 350000,
    next: 450000,
  },
  {
    level: 10,
    total: 800000,
    next: 1200000,
  },
  {
    level: 11,
    total: 2000000,
    next: 2000000,
  },
  {
    level: 12,
    total: 4000000,
    next: 4000000,
  },
  {
    level: 13,
    total: 8000000,
    next: 7000000,
  },
  {
    level: 14,
    total: 15000000,
    next: 15000000,
  },
  {
    level: 15,
    total: 30000000,
    next: 120000000,
  },
  {
    level: 16,
    total: 150000000,
    next: 450000000,
  },
  {
    level: 17,
    total: 600000000,
    next: 1900000000,
  },
  {
    level: 18,
    total: 2500000000,
    next: 7500000000,
  },
  {
    level: 19,
    total: 10000000000,
    next: 15000000000,
  },
  {
    level: 20,
    total: 25000000000,
    next: 475000000000,
  },
];
