var test = ["test"];


$("#submit-button").on("click", function(event){
    event.preventDefault();

        
        for (i = 0; i < 24; i++){
        var pokemonID = Math.floor((Math.random() * 818)+1); 
        $.ajax({
                method:"GET",                
                url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=" + pokemonID 
            }).then(function(response){
                console.log(response); 
                const n = response.cards.length;
                console.log(n);
                var chooser = Math.floor((Math.random() * n));
                if (n < chooser){
                        alert("Error with array");
                } else {
                    test.push(response.cards[Math.floor((Math.random() * n))].imageUrlHiRes);      //YOU NEED TO MAKE THIS RANDOM                    
                             
				}   
				// if(test.length == 3){
				// 	console.log("Array is finished");
					
				// }                            
            });
    
        }
        console.log(test);

        //Change these names to meaningful names
        // var time2 = setInterval(frame2, 1000);
   
           $("#loading").html(
                `<div>
                    <h2>We are carefully picking your pokemon!</h2>
                </div>`
            )
            //fix this global variable
            time = setInterval(frame, 1000);
            function frame(){
                if(test.length < 9){
                    $("#buttonContainer").html("Loading!!!");
                }else{
                
              
                $("#buttonContainer").html(
                    `<button onclick="play()">Enter</button>`
                );
                }
            }





// 		// 
 
// //pair1 will always be test[1]
// //pair2 wil always be test[2]
// //Doesn't matter because the pokemon going in are random.
        });
        
        function play(){
            $("#play").css("display", "block");
        }

        $("#play").click(function(){
            for (var j = 1; j<9; j++){ //then change this is an array can be declared empty.
                var pokemonCard = $(`<img id='image${[j]}' class='img-card'>`);
                pokemonCard.attr("src", test[j]);
                $("#card-container").append(pokemonCard);
                }
            $("#card-container").css("display","block");
            $("#testDiv").css("background-image", "url('https://images.pokemontcg.io/xy0/19_hires.png')");
            $("#loading").css("display", "none");
            $("#buttonContainer").css("display", "none");
            clearInterval(time);
        });




// //find out if an array has to be declared with a value.
//     //    $("#play").click(function(event){
//     //     var time = setInterval(frame, 1000);
//     //     event.preventDefault();
//     //     console.log(test);
//     //     function frame(){
//     //     if(test.length < 9){
//     //         var format = "We carefully choosing epic pokemon cards for you to see. Think of your favourite pokemon. Will you get to see it this time?";
//     //         //Change this to template literates
//     //         alert(format);
//     //     }else{
//     //     for (var j = 1; j<9; j++){ //then change this is an array can be declared empty.
//     //     var pokemonCard = $("<img class='img-card'>");
//     //     pokemonCard.attr("src", test[j]);
//     //     $("#card-container").append(pokemonCard);
//     //     }
//     //     clearInterval(time);
//     // }
//     //     }
//     //    });


// // $("#play").on("click", function(event){
// //     event.preventDefault();
   
// //     var test = ["test"];
// //      $.ajax({
// //         method:"GET",
// //         url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?nationalPokedexNumber=85"
// //     }).then(function(response){
// //         console.log(response);
// //          const n = response.cards.length;
        
// //         for (var i = 0; i<response.cards.length; i++){
// //             test.push(response.cards[i].imageUrlHiRes);
// //         }
// //         console.log(test);
// //         var pokemonCard = $("<img class='img-card'>");
// //         pokemonCard.attr("src", test[Math.floor((Math.random() * n))]);
// //         $("#card-container").append(pokemonCard);
// //     });
// // });






// // //tutorial https://www.youtube.com/watch?v=5zcSpVKxMao&t=1344s

// // //Build in some defensive design so that should you get an error response of 404 then it selects another one until it gets a correct one. 
// // //Build an array pusher to put each card into the same array. This can then have a do until it is 8 or do until it is 16. 

// // // $("#submit-button").on("click", function(event){
// // //     event.preventDefault();
// // //     var pokemon = $("#search").val();
// // //     console.log(pokemon);

// // //     $.ajax({
// // //         method:"GET",
// // //         //url: "https://cors-anywhere.herokuapp.com/https://api.pokemontcg.io/v1/cards?name="+pokemon
// // //     }).then(function(response){
// // //         console.log(response);

// //         //This little bit here can loop through the pokemon array and present the images at the end of the game. 
// // //         for (var i = 0; i<response.cards.length; i++){
// // //             var pokemonCard = $("<img class='img-card'>");
// // //             pokemonCard.attr("src", response.cards[i].imageUrlHiRes);
// // //             $("#card-container").append(pokemonCard);
// // //         }
// // //     });
// // });

$("#testDiv").click(function(){
    
    $("#testDivCover").toggleClass("display");

    $(this).toggleClass("display");
});

$("#testDivCover").click(function(){
    $(this).toggleClass("display");
   
    $("#testDiv").toggleClass("display");
});