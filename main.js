$(document).ready(function () {

	var turn = 1;
    var play = true;
    var check = 0;

	$("#tableXO tr td").click(function () {
        check++;
		if ($(this).text() == "" && play) {
			if ((turn % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
			}
			turn++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner</span>X</div><button onclick="location.reload();" id="reload">Play Again</button>');
                    // $('.winner').css('background-color', '#61892f');
                    $('.winner').css({
                        "background-color": "#61892f",
                        "display": "flex",
                        "justify-content": "center",
                        "font-size": "50px"
                    });
					$('#reload').css({
                        "background-color": "white",
                        "font-size": "50px"
                    });
				} else {
					$('body').append('<div class="winner"><span>Winner</span>O</div><button onclick="location.reload();" id="reload">Play Again</button>');
                    $('.winner').css({
                        "background-color": "#61892f",
                        "display": "flex",
                        "justify-content": "center",
                        "font-size": "50px"
                    });
					$('#reload').css({
                        "background-color": "white",
                        "font-size": "50px"
                    });
				}
				play = false;
            }
            else if(check == 9){
                $('body').append('<div class="winner"><span>Draw!!</span></div><button onclick="location.reload();" id="reload">Play Again</button>');
                    $('.winner').css({
                        "background-color": "#61892f",
                        "display": "flex",
                        "justify-content": "center",
                        "font-size": "50px"
                    });
					$('#reload').css({
                        "background-color": "white",
                        "font-size": "50px"
                    });
            }
		}
	});

	function checkForWinner() {
		var box1 = $("#tableXO tr:nth-child(1) td:nth-child(1)").text();
		var box2 = $("#tableXO tr:nth-child(1) td:nth-child(2)").text();
		var box3 = $("#tableXO tr:nth-child(1) td:nth-child(3)").text();
		var box4 = $("#tableXO tr:nth-child(2) td:nth-child(1)").text();
		var box5 = $("#tableXO tr:nth-child(2) td:nth-child(2)").text();
		var box6 = $("#tableXO tr:nth-child(2) td:nth-child(3)").text();
		var box7 = $("#tableXO tr:nth-child(3) td:nth-child(1)").text();
		var box8 = $("#tableXO tr:nth-child(3) td:nth-child(2)").text();
		var box9 = $("#tableXO tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		if ((box1 == box2) && (box2 == box3)) {
			return box3;
		} else if ((box4 == box5) && (box5 == box6)) {
			return box6;
		} else if ((box7 == box8) && (box8 == box9)) {
			return box9;
		}
		// check columns
		else if ((box1 == box4) && (box4 == box7)) {
			return box7;
		} else if ((box2 == box5) && (box5 == box8)) {
			return box8;
		} else if ((box3 == box6) && (box6 == box9)) {
			return box9;
		}
		// check diagonals
		else if ((box1 == box5) && (box5 == box9)) {
			return box9;
		} else if ((box3 == box5) && (box5 == box7)) {
			return box7;
		}
        // no winner
		return -1;
	}

});