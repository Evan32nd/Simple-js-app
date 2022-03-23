//Pokemon list with evolution level, height, and type

let pokemonRepository = (function () {

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


return {
  add: function(pokemon) {
    pokemonList.push(pokemon);
  },
  getAll: function() {
    return pokemonList;
  }
};
})();


//test out... <br> out of quotes? line 31 repeat pokemonlist??

//loop and if of pokemon name, height, and comment on height
// let text = "Name: "
//
// for (let i = 0; i < pokemonList.length; i++){
//   if (pokemonList[i].height >= 2){
//     document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Wow he ballin<br>");
//
//   }else if (pokemonList[i].height < 2 && pokemonList[i].height >= 1.5){
//     document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Claims to be 6 foot when wearing shoes<br>");
//
//   }else if (pokemonList[i].height < 1.5){
//     document.write(text + pokemonList[i].name + " (Height: " + pokemonList[i].height + "m) -- Unlucky bro ¯\\_(ツ)_/¯<br>");
//   }
// }



// pokemonList.forEach(documentList);
//
// function documentList(pokemonList) {
//   document.write(pokemonList.name);
// }

//replacing loop with for each
pokemonRepository.getAll.forEach(showArray);


function showArray(pokemonRepository.getAll) {
  if (pokemonList.height >= 2){
    document.write("Name: " + pokemonList.name + " (Height: " + pokemonList.height + "m) -- Wow he balling<br>");

  }else if (pokemonList.height < 2 && pokemonList.height >= 1.5){
    document.write("Name: " + pokemonList.name + " (Height: " + pokemonList.height + "m) -- Claims to be 6 foot when wearing shoes<br>");

  }else if (pokemonList.height < 1.5){
    document.write("Name: " + pokemonList.name + " (Height: " + pokemonList.height + "m) -- Unlucky bro ¯\\_(ツ)_/¯<br>");
  }
}
