$("#submit-button").on("click", function(event){
    event.preventDefault();

        var pokemonArray = ["test1"];
        for (i = 0; i < 8; i++){
        var pokemonID = Math.floor((Math.random() * 151)+1); 
        $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
            }).then(function(response){
                console.log(response); 
                const n = response.cards.length;
                var chooser = Math.floor((Math.random() * n));
                var pokemonPic = response.cards[chooser].imageUrlHiRes;
                pokemonArray.unshift(pokemonPic); 
                console.log(pokemonArray); 
                console.log(pokemonPic);
                if (n < chooser){
                        alert("Error with array");
                } else {
                    var pokemonCard = $("<img class='img-card'>");
                    pokemonCard.attr("src", pokemonPic);
                    $("#card-container").append(pokemonCard); 
                    console.log("No duplicate");                 
                }                               
            });
    
        }
        console.log(i);
        console.log(pokemonArray);
        

        });







// //tutorial https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s

// //Build in some defensive design so that should you get an error response of 404 then it selects another one until it gets a correct one. 
// //Build an array pusher to put each card into the same array. This can then have a do until it is 8 or do until it is 16. 

// // $("#submit-button").on("click", function(event){
// //     event.preventDefault();
// //     var pokemon = $("#search").val();
// //     console.log(pokemon);

// //     $.ajax({
// //         method:"GET",
// //         //url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?name="+pokemon
// //     }).then(function(response){
// //         console.log(response);

//         //This little bit here can loop through the pokemon array and present the images at the end of the game. 
// //         for (var i = 0; i<response.cards.length; i++){
// //             var pokemonCard = $("<img class='img-card'>");
// //             pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
// //             $("#card-container").append(pokemonCard);
// //         }
// //     });
// // });