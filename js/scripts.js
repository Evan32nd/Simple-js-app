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

  showDetails: function showDetails(pokemon) {
    console.log(pokemon.name)
  },

  addListItem: function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.addEventListener('click', function() {
      pokemonRepository.showDetails(pokemon);
  })
    button.innerText = pokemon.name;
    button.classList.add("pokemon-button");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
  },


  add: function(pokemon) {
    pokemonList.push(pokemon);
  },


  getAll: function() {
    return pokemonList;
  }
};
})();


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})


// pokemonRepository.getAll().forEach(function(items){
//
//
//
//   if (items.height >= 2){items
//     document.write("Name: " + items.name + " (Height: " + items.height + "m) -- Wow he balling<br>");
//
//
//   }else if (items.height < 2 && items.height >= 1.5){
//     document.write("Name: " + items.name + " (Height: " + items.height + "m) -- Claims to be 6 foot when wearing shoes<br>");
//
//
// }else if (items.height < 1.5){
//     document.write("Name: " + items.name + " (Height: " + items.height + "m) -- Unlucky bro ¯\\_(ツ)_/¯<br>");
//   }
// })
