//Pokemon list with evolution level, height, and type


let pokemonList = [
  {
    name: "Torterra",
    evoLevel: 3,
    height: 2.2,
    type: ["grass", "ground"]
  },
  {
    name: "Infernape",
    evoLevel: 3,
    height: 1.2,
    type: ["fire", "fighting"]
  },
  {
    name: "Empoleon",
    evoLevel: 3,
    height: 1.7,
    type: ["water", "steel"]
  },
];

//<br> out of quotes? line 31 repeat pokemonlist


let text = "Name: "

for (let i = 0; i < pokemonList.length; i++){
  if (pokemonList[i].height >= 2){
    document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Wow he ballin<br>");

  }else if (pokemonList[i].height < 2 && pokemonList[i].height >= 1.5){
    document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Claims to be 6 foot when wearing shoes<br>");

  }else if (pokemonList[i].height < 1.5){
    document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Unlucky bro ¯\_(ツ)_/¯<br>");
  }
}
