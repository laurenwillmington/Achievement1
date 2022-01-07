
let pokemonList =[
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

for (i=0; i < pokemonList.length; i++) {
    document.write(
        "<p class='pokemon'>" + pokemonList[i].name + ' (height: ' + pokemonList[i].height + ")" + (pokemonList[i].height > 3 ? ' - Wow, That is big' : '') +  "</p>"
    ); 
}

