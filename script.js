$(document).ready(function(){
	console.log("hi");

	var restart = document.querySelector(".restart");
	var playerX = true;
	var playerO = false;


//switching between players
		var lastPlayer = playerX;
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

//marking Xs and Os
		$(".block").each(function(index){
			$(this).on("click", function(){
					if($(this).hasClass("x") || $(this).hasClass("o")){
						console.log("block full");
					}
					else if(lastPlayer === true){
						$(this).toggleClass("x");
						console.log("mark X");
						gamePlay();
						takeTurns();
					}
					else{
						$(this).toggleClass("o");
						console.log("mark O");
						gamePlay();
						takeTurns();
					}
			});
		})

		// var allRows = $(".row");
		// console.log(allRows);
		// console.log(allRows[1]);
		// var someBlocks = document.getElementsByClassName("row")[0].getElementsByClassName("x");
		// if(someBlocks.length === 3);
		// console.log(someBlocks);
		// var foundBlocks = allRows.querySelectorAll(".block");
		// console.log(foundBlocks);
		// console.log(allRows[0].foundBlocks.length);

		var gamePlay = function(){
			// var xBlocks = $(".x");
			// if($(xBlocks).attr("data-row1").length === 3){
			// 	announceWinner();
			// }
			var allRows = $(".row");
			console.log(allRows);
			// var row1 = document.getElementsByClassName("row");
			var row1Xs = document.getElementsByClassName("row")[0].getElementsByClassName("x");
			var row2Xs = document.getElementsByClassName("row")[1].getElementsByClassName("x");
			var row3Xs = document.getElementsByClassName("row")[2].getElementsByClassName("x");
			var row1Os = document.getElementsByClassName("row")[0].getElementsByClassName("o");
			var row2Os = document.getElementsByClassName("row")[1].getElementsByClassName("o");
			var row3Os = document.getElementsByClassName("row")[2].getElementsByClassName("o");
			var classX = document.getElementsByClassName("x");
			console.log(classX);
			// console.log(row1Xs.firstChild.getElementsByClass("x"));
			if(row1Xs.length === 3 || row2Xs.length === 3 || row3Xs.length === 3){
				announceWinner();
			}
			else if(row1Os.length === 3 || row2Os.length === 3 || row3Os.length === 3){
				announceWinner();
			}
			else if(row1Xs.firstChild === 1 && row2Xs.firstChild === 1 && row3Xs.firstChild === 1){
				announceWinner();
			}
			gameBoardFull();
		}

		var announceWinner = function(){
			if(lastPlayer === true){
				alert("Player X wins!");
			}
			else{
				alert("Player O wins!");
			}
		}

	//checks to see if all squares are taken, if so, then gameFinished
		var gameBoardFull = function(){
			if($(".x").length === 5 || $(".o").length === 5){
				alert("Draw!");
				finishedGame();
			}
		}

		var finishedGame = function(){
			// $(restartGame)
		}

		var restartGame = function(){
			// Will clear board, but retain names
			// $(".block").empty();
			$(".block").removeClass("x");
			$(".block").removeClass("o");
		}


		$(".restart").click(restartGame);
		gamePlay();
	});
