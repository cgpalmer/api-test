$("#submit-button").on("click", function(event){
    event.preventDefault();
    var pokemon = $("#search").val();
    console.log(pokemon);

    $.ajax({
        method:"GET",
        url: "https://pokemontcg.io/cards?name="+pokemon
    }).then(function(response){
        for (var i = 0; i<response.cards.length; i++){
            var pokemonCard = $("<img>");
            pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
            $("#card-container").append(pokemonCard);
        }
    });
});
