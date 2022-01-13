


    const pokemonRepository = (function(){
        let pokemonList = [
            {
                name: 'piccachu',
                height: 2,
                types: ['water','lightning','fire']
            },
        
            {
                name: 'bulbasar',
                height: 5,
                types: ['wind', 'strength']
            },
        
            {
                name: 'evy',
                height: 1,
                types: ['spinkick', 'cuteness']
            }
        ]
        return {
            add: function(addNewPokemon){
                pokemonList.push(addNewPokemon)
            },
            getAll: function(){
                return pokemonList
            }
        }
    })()




// for (i=0; i < pokemonList.length; i++) {
//     document.write(
//         "<p class='pokemon'>" + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ")" + (pokemonList[i].height > 3 ? ' - Wow, That is big' : '') +  "</p>"
//     ); 
// }

pokemonRepository.getAll().forEach(function(pokemon){
        document.write(
        "<p class='pokemon'>" + pokemon.name + ' (height: ' + pokemon.height + ")" + (pokemon.height > 3 ? ' - Wow, That is big' : '') +  "</p>"
    ); 
})
