$("#submit-button").on("click", function(event){
    event.preventDefault();
    var pokemon = $("#search").val();
    console.log(pokemon);

    $.ajax({
        method:"GET",
        url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?name="+pokemon
    }).then(function(response){
        console.log(response);
        if(response.cards.length == 0){
            alert("Opps this isn't a pokemon!");
        }
        for (var i = 0; i<response.cards.length; i++){
            var pokemonCard = $("<img class='img-card'>");
            pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
            $("#card-container").append(pokemonCard);
        }
    });
});

//tutorial https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s

//Build in some defensive design so that should you get an error response of 404 then it selects another one until it gets a correct one. 
//Build an array pusher to put each card into the same array. This can then have a do until it is 8 or do until it is 16. 

// $("#submit-button").on("click", function(event){
//     event.preventDefault();
//     var pokemon = $("#search").val();
//     console.log(pokemon);

//     $.ajax({
//         method:"GET",
//         //url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?name="+pokemon
//     }).then(function(response){
//         console.log(response);
//         for (var i = 0; i<response.cards.length; i++){
//             var pokemonCard = $("<img class='img-card'>");
//             pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
//             $("#card-container").append(pokemonCard);
//         }
//     });
// });