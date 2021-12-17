const fs = require("fs");
const width = 400;
const height = 400;
const dir = __dirname;
const description = "";
const baseImageUri = "";
const startEditionFrom = 1;
const endEditionAt = 3333;
const editionSize = 3333;
const secondcollection = 50000000000;
const raceWeights = [
  {
    value: "PANTHERS",
    from: 1,
    to: endEditionAt,
    weight: 100, //100%
  },
  {
    value: "PANTHERS2",
    from: 1,
    to: endEditionAt,
    weight: 50, //100%
  },
];


/*

  {
    value: "1",
    from: 1,
    to: endEditionAt,
    weight: 100, //100%
  },
  {
    value: "2",
    from: 1,
    to: endEditionAt,
    weight: 50, //100%
  },

*/



const races = {
  PANTHERS: {
    name: "PANTHERS",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 1,
            name: "Caribbean Island",
            path: `${dir}/1-background/Caribbean Island.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Crystal Tunnel",
            path: `${dir}/1-background/Crystal Tunnel.png`,
            weight: 90, //10%
          },
          {
            id: 3,
            name: "Fairy Forest",
            path: `${dir}/1-background/Fairy Forest.png`,
            weight: 80, //10%
          },
          {
            id: 4,
            name: "Flower Garden",
            path: `${dir}/1-background/Flower Garden.png`,
            weight: 70, //10%
          },
          {
            id: 5,
            name: "Graveyard",
            path: `${dir}/1-background/Graveyard.png`,
            weight: 60, //10%
          },
          {
            id: 6,
            name: "Icy Mountain",
            path: `${dir}/1-background/Icy Mountain.png`,
            weight: 50, //10%
          },
          {
            id: 7,
            name: "Panther Heaven",
            path: `${dir}/1-background/Panther Heaven.png`,
            weight: 40, //10%
          },
          {
            id: 8,
            name: "Panther Hell",
            path: `${dir}/1-background/Panther Hell.png`,
            weight: 30, //10%
          },
          {
            id: 9,
            name: "Royal Castle",
            path: `${dir}/1-background/Royal Castle.png`,
            weight: 20, //10%
          },
          {
            id: 10,
            name: "Underground Dungeon",
            path: `${dir}/1-background/Underground Dungeon.png`,
            weight: 10, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Fur",
        elements: [
          {
            id: 1,
            name: "Blue Moon",
            path: `${dir}/2-fur/Blue Moon Panther.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Crystal",
            path: `${dir}/2-fur/Crystal Panther.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Cyber",
            path: `${dir}/2-fur/Cyber Panther.png`,
            weight: 93.0, //10%
          },
          {
            id: 4,
            name: "Electrical Blue",
            path: `${dir}/2-fur/Electrical Blue Panther.png`,
            weight: 78.1, //10%
          },
          {
            id: 5,
            name: "Gold",
            path: `${dir}/2-fur/Gold Panther.png`,
            weight: 63.1, //10%
          },
          {
            id: 6,
            name: "Lava",
            path: `${dir}/2-fur/Lava Panther.png`,
            weight: 60.1, //10%
          },
          {
            id: 7,
            name: "Light",
            path: `${dir}/2-fur/Light Panther.png`,
            weight: 45.2, //10%
          },
          {
            id: 8,
            name: "Mutant",
            path: `${dir}/2-fur/Mutant Panther.png`,
            weight: 30.2, //10%
          },
          {
            id: 9,
            name: "Pink",
            path: `${dir}/2-fur/Pink Panther.png`,
            weight: 24.2, //10%
          },
          {
            id: 10,
            name: "Skeleton",
            path: `${dir}/2-fur/Skeleton Panther.png`,
            weight: 18.2, //10%
          },
          {
            id: 11,
            name: "Stone",
            path: `${dir}/2-fur/Stone Panther.png`,
            weight: 17.3, //10%
          },
          {
            id: 12,
            name: "Zombie",
            path: `${dir}/2-fur/Zombie Panther.png`,
            weight: 2.3, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 1,
            name: "3D Glasses",
            path: `${dir}/3-eyes/3D Glasses.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Aviator Shades",
            path: `${dir}/3-eyes/Aviator Shades.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Black Eyes",
            path: `${dir}/3-eyes/Black Eyes.png`,
            weight: 92.0, //10%
          },
          {
            id: 4,
            name: "Cloudy Eyes",
            path: `${dir}/3-eyes/Cloudy Eyes.png`,
            weight: 79.0, //10%
          },
          {
            id: 5,
            name: "Digital Glasses",
            path: `${dir}/3-eyes/Digital Glasses.png`,
            weight: 66.0, //10%
          },
          {
            id: 6,
            name: "Emerald Eyes",
            path: `${dir}/3-eyes/Emerald Eyes.png`,
            weight: 63.1, //10%
          },
          {
            id: 7,
            name: "Eye Patch",
            path: `${dir}/3-eyes/Eye Patch.png`,
            weight: 55.1, //10%
          },
          {
            id: 8,
            name: "Eye Scanner",
            path: `${dir}/3-eyes/Eye Scanner.png`,
            weight: 52.1, //10%
          },
          {
            id: 9,
            name: "Heart Shades",
            path: `${dir}/3-eyes/Heart Shades.png`,
            weight: 51.1, //10%
          },
          {
            id: 10,
            name: "Laser Visor",
            path: `${dir}/3-eyes/Laser Visor.png`,
            weight: 47.1, //10%
          },
          {
            id: 11,
            name: "Monocle",
            path: `${dir}/3-eyes/Monocle.png`,
            weight: 45.2, //10%
          },
          {
            id: 12,
            name: "Pixel Shades",
            path: `${dir}/3-eyes/Pixel Shades.png`,
            weight: 40.2, //10%
          },
          {
            id: 13,
            name: "Robotic Eye",
            path: `${dir}/3-eyes/Robotic Eye.png`,
            weight: 36.2, //10%
          },
          {
            id: 14,
            name: "Round Shades",
            path: `${dir}/3-eyes/Round Shades.png`,
            weight: 35.9, //10%
          },
          {
            id: 15,
            name: "Rubis Eyes",
            path: `${dir}/3-eyes/Rubis Eyes.png`,
            weight: 31.9, //10%
          },
          {
            id: 16,
            name: "Sapphire Eyes",
            path: `${dir}/3-eyes/Sapphire Eyes.png`,
            weight: 24.9, //10%
          },
          {
            id: 17,
            name: "Scarred Eyes",
            path: `${dir}/3-eyes/Scarred Eyes.png`,
            weight: 17.9, //10%
          },
          {
            id: 18,
            name: "Spirit Vision",
            path: `${dir}/3-eyes/Spirit Vision.png`,
            weight: 12.9, //10%
          },
          {
            id: 19,
            name: "Sunny Eyes",
            path: `${dir}/3-eyes/Sunny Eyes.png`,
            weight: 11.0, //10%
          },
          {
            id: 20,
            name: "Vairon Eyes",
            path: `${dir}/3-eyes/Vairon Eyes.png`,
            weight: 3.0, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Attire",
        elements: [
          {
            id: 1,
            name: "Black Spiky Collar",
            path: `${dir}/4-attire/Black Spiky Collar.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Black Trooper Jacket",
            path: `${dir}/4-attire/Black Trooper Jacket.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Gold Bitcoin Collar",
            path: `${dir}/4-attire/Gold Bitcoin Collar.png`,
            weight: 95.0, //10%
          },
          {
            id: 4,
            name: "Golden Necklace",
            path: `${dir}/4-attire/Golden Necklace.png`,
            weight: 92.0, //10%
          },
          {
            id: 5,
            name: "Pearl Necklace",
            path: `${dir}/4-attire/Pearl Necklace.png`,
            weight: 88.1, //10%
          },
          {
            id: 6,
            name: "Pendant Necklace",
            path: `${dir}/4-attire/Pendant Necklace.png`,
            weight: 84.1, //10%
          },
          {
            id: 7,
            name: "Police Badge",
            path: `${dir}/4-attire/Police Badge.png`,
            weight: 80.1, //10%
          },
          {
            id: 8,
            name: "Red Spiky Collar",
            path: `${dir}/4-attire/Red Spiky Collar.png`,
            weight: 76.1, //10%
          },
          {
            id: 9,
            name: "SOL Chain",
            path: `${dir}/4-attire/SOL Chain.png`,
            weight: 71.1, //10%
          },
          {
            id: 10,
            name: "Space Cadet Badge",
            path: `${dir}/4-attire/Space Cadet Badge.png`,
            weight: 68.1, //10%
          },
          {
            id: 11,
            name: "White Trooper Jacket",
            path: `${dir}/4-attire/White Trooper Jacket.png`,
            weight: 64.1, //10%
          },
          {
            id: 12,
            name: "None",
            path: `${dir}/4-attire/None.png`,
            weight: 63.2, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Jaw",
        elements: [
          {
            id: 1,
            name: "Bone",
            path: `${dir}/5-jaw/Bone.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Bubble Gum",
            path: `${dir}/5-jaw/Bubble Gum.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Cigar",
            path: `${dir}/5-jaw/Cigar.png`,
            weight: 91.0, //10%
          },
          {
            id: 4,
            name: "Cigarette",
            path: `${dir}/5-jaw/Cigarette.png`,
            weight: 89.0, //10%
          },
          {
            id: 5,
            name: "Hookah",
            path: `${dir}/5-jaw/Hookah.png`,
            weight: 84.1, //10%
          },
          {
            id: 6,
            name: "Purple Bubble",
            path: `${dir}/5-jaw/Purple Bubble.png`,
            weight: 82.1, //10%
          },
          {
            id: 7,
            name: "Rainbow Surprise",
            path: `${dir}/5-jaw/Rainbow Surprise.png`,
            weight: 78.1, //10%
          },
          {
            id: 8,
            name: "Snake Tongue",
            path: `${dir}/5-jaw/Snake Tongue.png`,
            weight: 77.1, //10%
          },
          {
            id: 9,
            name: "Spirit Drive",
            path: `${dir}/5-jaw/Spirit Drive.png`,
            weight: 75.1, //10%
          },
          {
            id: 10,
            name: "None",
            path: `${dir}/5-jaw/None.png`,
            weight: 74.9, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Head",
        elements: [
          {
            id: 2,
            name: "Baby Panther",
            path: `${dir}/6-head/Baby Panther.png`,
            weight: 100, //10%
          },
          {
            id: 3,
            name: "Bamboo Hat",
            path: `${dir}/6-head/Bamboo Hat.png`,
            weight: 99.91, //10%
          },
          {
            id: 5,
            name: "Court Hat",
            path: `${dir}/6-head/Court Hat.png`,
            weight: 95.92, //10%
          },
          {
            id: 6,
            name: "Cowboy Hat",
            path: `${dir}/6-head/Cowboy Hat.png`,
            weight: 90.94, //10%
          },
          {
            id: 7,
            name: "Crown",
            path: `${dir}/6-head/Crown.png`,
            weight: 86.95, //10%
          },
          {
            id: 9,
            name: "Gardening Hat",
            path: `${dir}/6-head/Gardening Hat.png`,
            weight: 84.97, //10%
          },
          {
            id: 11,
            name: "Halo",
            path: `${dir}/6-head/Halo.png`,
            weight: 80.98, //10%
          },
          {
            id: 14,
            name: "Punk Hair",
            path: `${dir}/6-head/Punk Hair.png`,
            weight: 76.99, //10%
          },
          {
            id: 16,
            name: "Sombrero",
            path: `${dir}/6-head/Sombrero.png`,
            weight: 73.00, //10%
          },
          {
            id: 20,
            name: "None",
            path: `${dir}/6-head/None.png`,
            weight: 70.03, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
  PANTHERS2: {
    name: "PANTHERS2",
    layers: [
      {
        name: "Background",
        elements: [
          {
            id: 1,
            name: "Caribbean Island",
            path: `${dir}/1-background/Caribbean Island.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Crystal Tunnel",
            path: `${dir}/1-background/Crystal Tunnel.png`,
            weight: 90, //10%
          },
          {
            id: 3,
            name: "Fairy Forest",
            path: `${dir}/1-background/Fairy Forest.png`,
            weight: 80, //10%
          },
          {
            id: 4,
            name: "Flower Garden",
            path: `${dir}/1-background/Flower Garden.png`,
            weight: 70, //10%
          },
          {
            id: 5,
            name: "Graveyard",
            path: `${dir}/1-background/Graveyard.png`,
            weight: 60, //10%
          },
          {
            id: 6,
            name: "Icy Mountain",
            path: `${dir}/1-background/Icy Mountain.png`,
            weight: 50, //10%
          },
          {
            id: 7,
            name: "Panther Heaven",
            path: `${dir}/1-background/Panther Heaven.png`,
            weight: 40, //10%
          },
          {
            id: 8,
            name: "Panther Hell",
            path: `${dir}/1-background/Panther Hell.png`,
            weight: 30, //10%
          },
          {
            id: 9,
            name: "Royal Castle",
            path: `${dir}/1-background/Royal Castle.png`,
            weight: 20, //10%
          },
          {
            id: 10,
            name: "Underground Dungeon",
            path: `${dir}/1-background/Underground Dungeon.png`,
            weight: 10, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Fur",
        elements: [
          {
            id: 1,
            name: "Blue Moon",
            path: `${dir}/2-fur/Blue Moon Panther.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Crystal",
            path: `${dir}/2-fur/Crystal Panther.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Cyber",
            path: `${dir}/2-fur/Cyber Panther.png`,
            weight: 93.0, //10%
          },
          {
            id: 4,
            name: "Electrical Blue",
            path: `${dir}/2-fur/Electrical Blue Panther.png`,
            weight: 78.1, //10%
          },
          {
            id: 5,
            name: "Gold",
            path: `${dir}/2-fur/Gold Panther.png`,
            weight: 63.1, //10%
          },
          {
            id: 6,
            name: "Lava",
            path: `${dir}/2-fur/Lava Panther.png`,
            weight: 60.1, //10%
          },
          {
            id: 7,
            name: "Light",
            path: `${dir}/2-fur/Light Panther.png`,
            weight: 45.2, //10%
          },
          {
            id: 8,
            name: "Mutant",
            path: `${dir}/2-fur/Mutant Panther.png`,
            weight: 30.2, //10%
          },
          {
            id: 9,
            name: "Pink",
            path: `${dir}/2-fur/Pink Panther.png`,
            weight: 24.2, //10%
          },
          {
            id: 10,
            name: "Skeleton",
            path: `${dir}/2-fur/Skeleton Panther.png`,
            weight: 18.2, //10%
          },
          {
            id: 11,
            name: "Stone",
            path: `${dir}/2-fur/Stone Panther.png`,
            weight: 17.3, //10%
          },
          {
            id: 12,
            name: "Zombie",
            path: `${dir}/2-fur/Zombie Panther.png`,
            weight: 2.3, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Attire",
        elements: [
          {
            id: 1,
            name: "Black Spiky Collar",
            path: `${dir}/4-attire/Black Spiky Collar.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Black Trooper Jacket",
            path: `${dir}/4-attire/Black Trooper Jacket.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Gold Bitcoin Collar",
            path: `${dir}/4-attire/Gold Bitcoin Collar.png`,
            weight: 95.0, //10%
          },
          {
            id: 4,
            name: "Golden Necklace",
            path: `${dir}/4-attire/Golden Necklace.png`,
            weight: 92.0, //10%
          },
          {
            id: 5,
            name: "Pearl Necklace",
            path: `${dir}/4-attire/Pearl Necklace.png`,
            weight: 88.1, //10%
          },
          {
            id: 6,
            name: "Pendant Necklace",
            path: `${dir}/4-attire/Pendant Necklace.png`,
            weight: 84.1, //10%
          },
          {
            id: 7,
            name: "Police Badge",
            path: `${dir}/4-attire/Police Badge.png`,
            weight: 80.1, //10%
          },
          {
            id: 8,
            name: "Red Spiky Collar",
            path: `${dir}/4-attire/Red Spiky Collar.png`,
            weight: 76.1, //10%
          },
          {
            id: 9,
            name: "SOL Chain",
            path: `${dir}/4-attire/SOL Chain.png`,
            weight: 71.1, //10%
          },
          {
            id: 10,
            name: "Space Cadet Badge",
            path: `${dir}/4-attire/Space Cadet Badge.png`,
            weight: 68.1, //10%
          },
          {
            id: 11,
            name: "White Trooper Jacket",
            path: `${dir}/4-attire/White Trooper Jacket.png`,
            weight: 64.1, //10%
          },
          {
            id: 12,
            name: "None",
            path: `${dir}/4-attire/None.png`,
            weight: 63.2, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Jaw",
        elements: [
          {
            id: 1,
            name: "Bone",
            path: `${dir}/5-jaw/Bone.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Bubble Gum",
            path: `${dir}/5-jaw/Bubble Gum.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Cigar",
            path: `${dir}/5-jaw/Cigar.png`,
            weight: 91.0, //10%
          },
          {
            id: 4,
            name: "Cigarette",
            path: `${dir}/5-jaw/Cigarette.png`,
            weight: 89.0, //10%
          },
          {
            id: 5,
            name: "Hookah",
            path: `${dir}/5-jaw/Hookah.png`,
            weight: 84.1, //10%
          },
          {
            id: 6,
            name: "Purple Bubble",
            path: `${dir}/5-jaw/Purple Bubble.png`,
            weight: 82.1, //10%
          },
          {
            id: 7,
            name: "Rainbow Surprise",
            path: `${dir}/5-jaw/Rainbow Surprise.png`,
            weight: 78.1, //10%
          },
          {
            id: 8,
            name: "Snake Tongue",
            path: `${dir}/5-jaw/Snake Tongue.png`,
            weight: 77.1, //10%
          },
          {
            id: 9,
            name: "Spirit Drive",
            path: `${dir}/5-jaw/Spirit Drive.png`,
            weight: 75.1, //10%
          },
          {
            id: 10,
            name: "None",
            path: `${dir}/5-jaw/None.png`,
            weight: 74.9, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Eyes",
        elements: [
          {
            id: 3,
            name: "Black Eyes",
            path: `${dir}/3-eyes/Black Eyes.png`,
            weight: 100, //10%
          },
          {
            id: 4,
            name: "Cloudy Eyes",
            path: `${dir}/3-eyes/Cloudy Eyes.png`,
            weight: 73.0, //10%
          },
          {
            id: 6,
            name: "Emerald Eyes",
            path: `${dir}/3-eyes/Emerald Eyes.png`,
            weight: 46.0, //10%
          },
          {
            id: 7,
            name: "Eye Patch",
            path: `${dir}/3-eyes/Eye Patch.png`,
            weight: 38.0, //10%
          },
          {
            id: 8,
            name: "Eye Scanner",
            path: `${dir}/3-eyes/Eye Scanner.png`,
            weight: 36.0, //10%
          },
          {
            id: 11,
            name: "Monocle",
            path: `${dir}/3-eyes/Monocle.png`,
            weight: 35.0, //10%
          },
          {
            id: 13,
            name: "Robotic Eye",
            path: `${dir}/3-eyes/Robotic Eye.png`,
            weight: 31.1, //10%
          },
          {
            id: 15,
            name: "Rubis Eyes",
            path: `${dir}/3-eyes/Rubis Eyes.png`,
            weight: 30.9, //10%
          },
          {
            id: 16,
            name: "Sapphire Eyes",
            path: `${dir}/3-eyes/Sapphire Eyes.png`,
            weight: 22.9, //10%
          },
          {
            id: 17,
            name: "Scarred Eyes",
            path: `${dir}/3-eyes/Scarred Eyes.png`,
            weight: 14.9, //10%
          },
          {
            id: 19,
            name: "Sunny Eyes",
            path: `${dir}/3-eyes/Sunny Eyes.png`,
            weight: 10.0, //10%
          },
          {
            id: 20,
            name: "Vairon Eyes",
            path: `${dir}/3-eyes/Vairon Eyes.png`,
            weight: 2.0, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
      {
        name: "Head",
        elements: [
          {
            id: 1,
            name: "Army Cadet",
            path: `${dir}/6-head/Army Cadet.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Baby Panther",
            path: `${dir}/6-head/Baby Panther.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Bamboo Hat",
            path: `${dir}/6-head/Bamboo Hat.png`,
            weight: 95.9, //10%
          },
          {
            id: 4,
            name: "Beret",
            path: `${dir}/6-head/Beret.png`,
            weight: 91.9, //10%
          },
          {
            id: 5,
            name: "Court Hat",
            path: `${dir}/6-head/Court Hat.png`,
            weight: 89.0, //10%
          },
          {
            id: 6,
            name: "Cowboy Hat",
            path: `${dir}/6-head/Cowboy Hat.png`,
            weight: 84.0, //10%
          },
          {
            id: 7,
            name: "Crown",
            path: `${dir}/6-head/Crown.png`,
            weight: 80.0, //10%
          },
          {
            id: 8,
            name: "Explorer's Cap",
            path: `${dir}/6-head/Explorer's Cap.png`,
            weight: 78.0, //10%
          },
          {
            id: 9,
            name: "Gardening Hat",
            path: `${dir}/6-head/Gardening Hat.png`,
            weight: 77.0, //10%
          },
          {
            id: 10,
            name: "Green Archer's Cap",
            path: `${dir}/6-head/Green Archer's Cap.png`,
            weight: 73.0, //10%
          },
          {
            id: 11,
            name: "Halo",
            path: `${dir}/6-head/Halo.png`,
            weight: 68.0, //10%
          },
          {
            id: 12,
            name: "Horns",
            path: `${dir}/6-head/Horns.png`,
            weight: 64.1, //10%
          },
          {
            id: 13,
            name: "Pirate Hat",
            path: `${dir}/6-head/Pirate Hat.png`,
            weight: 63.1, //10%
          },
          {
            id: 14,
            name: "Punk Hair",
            path: `${dir}/6-head/Punk Hair.png`,
            weight: 62.8, //10%
          },
          {
            id: 15,
            name: "Santa Hat",
            path: `${dir}/6-head/Santa Hat.png`,
            weight: 58.8, //10%
          },
          {
            id: 16,
            name: "Sombrero",
            path: `${dir}/6-head/Sombrero.png`,
            weight: 58.2, //10%
          },
          {
            id: 17,
            name: "Spikes",
            path: `${dir}/6-head/Spikes.png`,
            weight: 55.2, //10%
          },
          {
            id: 18,
            name: "Storyteller's Hat",
            path: `${dir}/6-head/Storyteller's Hat.png`,
            weight: 50.2, //10%
          },
          {
            id: 19,
            name: "Wizard Cap",
            path: `${dir}/6-head/Wizard Cap.png`,
            weight: 48.2, //10%
          },
          {
            id: 20,
            name: "None",
            path: `${dir}/6-head/None.png`,
            weight: 46.3, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },
    ],
  },
}




/*

      {
        name: "Head",
        elements: [
          {
            id: 1,
            name: "Army Cadet",
            path: `${dir}/6-head/Army Cadet.png`,
            weight: 100, //10%
          },
          {
            id: 2,
            name: "Baby Panther",
            path: `${dir}/6-head/Baby Panther.png`,
            weight: 96.0, //10%
          },
          {
            id: 3,
            name: "Bamboo Hat",
            path: `${dir}/6-head/Bamboo Hat.png`,
            weight: 95.9, //10%
          },
          {
            id: 4,
            name: "Beret",
            path: `${dir}/6-head/Beret.png`,
            weight: 91.9, //10%
          },
          {
            id: 5,
            name: "Court Hat",
            path: `${dir}/6-head/Court Hat.png`,
            weight: 89.0, //10%
          },
          {
            id: 6,
            name: "Cowboy Hat",
            path: `${dir}/6-head/Cowboy Hat.png`,
            weight: 84.0, //10%
          },
          {
            id: 7,
            name: "Crown",
            path: `${dir}/6-head/Crown.png`,
            weight: 80.0, //10%
          },
          {
            id: 8,
            name: "Explorer's Cap",
            path: `${dir}/6-head/Explorer's Cap.png`,
            weight: 78.0, //10%
          },
          {
            id: 9,
            name: "Gardening Hat",
            path: `${dir}/6-head/Gardening Hat.png`,
            weight: 77.0, //10%
          },
          {
            id: 10,
            name: "Green Archer's Cap",
            path: `${dir}/6-head/Green Archer's Cap.png`,
            weight: 73.0, //10%
          },
          {
            id: 11,
            name: "Halo",
            path: `${dir}/6-head/Halo.png`,
            weight: 68.0, //10%
          },
          {
            id: 12,
            name: "Horns",
            path: `${dir}/6-head/Horns.png`,
            weight: 64.1, //10%
          },
          {
            id: 13,
            name: "Pirate Hat",
            path: `${dir}/6-head/Pirate Hat.png`,
            weight: 63.1, //10%
          },
          {
            id: 14,
            name: "Punk Hair",
            path: `${dir}/6-head/Punk Hair.png`,
            weight: 62.8, //10%
          },
          {
            id: 15,
            name: "Santa Hat",
            path: `${dir}/6-head/Santa Hat.png`,
            weight: 58.8, //10%
          },
          {
            id: 16,
            name: "Sombrero",
            path: `${dir}/6-head/Sombrero.png`,
            weight: 58.2, //10%
          },
          {
            id: 17,
            name: "Spikes",
            path: `${dir}/6-head/Spikes.png`,
            weight: 55.2, //10%
          },
          {
            id: 18,
            name: "Storyteller's Hat",
            path: `${dir}/6-head/Storyteller's Hat.png`,
            weight: 50.2, //10%
          },
          {
            id: 19,
            name: "Wizard Cap",
            path: `${dir}/6-head/Wizard Cap.png`,
            weight: 48.2, //10%
          },
          {
            id: 20,
            name: "None",
            path: `${dir}/6-head/None.png`,
            weight: 46.3, //10%
          },
        ],
        position: { x: 0, y: 0 },
        size: { width: width, height: height },
      },





{
  name: "Background",
  elements: [
    {
      id: 1,
      name: "llll",
      path: `${dir}/llll/llll.png`,
      weight: 100, //10%
    },
  ],
  position: { x: 0, y: 0 },
  size: { width: width, height: height },
},

*/






module.exports = {
  width,
  height,
  description,
  baseImageUri,
  editionSize,
  startEditionFrom,
  endEditionAt,
  races,
  raceWeights,
  secondcollection,
};
