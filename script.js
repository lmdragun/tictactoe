$(document).ready(function(){
	console.log("hi");

	var restart = document.querySelector(".restart");
	// var nameList = [];
	// var playerX = null;
	// var playerO = null;
	console.log(restart);

		// var fillBoard = function() {
		// 	for(i = 0; i < 9; i++){
		// 		var newBlock = document.createElement("div");
		// 		newBlock.className = "block";
		// 		$("#board").append(newBlock);
		// 	}
		// }

		// var collectNames = function(){
		// 	// will collect two names and make them playerX and playerO
		// 	var name = document.getElementById("name");
		// 	console.log("name: " + name);
		// 	if(nameList.length === 2){
		// 		alert("There are already two players!")
		// 	}
		// 	else{
		// 		nameList.push(name);
		// 	}
		// 		console.log(nameList);
				var playerX = true;
				var playerO = false;
		// 		$("turns").text(playerX);
		// }

		var lastPlayer = playerX;
		console.log("lastPlayer =" + lastPlayer);

		function takeTurns(){
			if(lastPlayer === playerX){
				$(".turns").text("Player O");
				lastPlayer = playerO;
			}
			else{
				$(".turns").text("Player X");
				lastPlayer = playerX;
			}
		}


		$(".block").each(function(index){
			$(this).on("click", function(){
					if($(this).hasClass("x")){
						console.log("block full");
					}
					else if(lastPlayer === true){
						$(this).toggleClass("x");
						console.log("mark X");
						takeTurns();
					}
					else{
						$(this).toggleClass("o");
						console.log("mark O")
						takeTurns();
					}

			});
		})

		var gamePlay = function(){
			$("#board").on("click", function(){
				var kids = $(".block").children();
				if(kids.length == 9){
					gameFinished();
				}
				})
		}

		var gameBoardFull = function(){
			//checks to see if all squares are taken, if so, then gameFinished
		}

		var gameFinished = function(){
			console.log("Finished Game");
			//checks to see if Xs or Os won (gamePlay) then either says who won or says there are no winners (gameBoardFull)
			//Waits and then clears board/names?
		}

		var restartGame = function(){
			// Will clear board, but retain names
			$(".block").empty();
			$(".block").removeClass("x");
			$(".block").removeClass("o");
		}


		$(".restart").click(restartGame);

	});
