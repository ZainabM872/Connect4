document.addEventListener('DOMContentLoaded', () => {

    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1

    //write a function that listens for everytime a square on grid is clicked

    for (var i = 0, len = squares.length; i < len; i++) //loops over each square
    //funtion to add on clicked
    (function (index){
        //add an onclick to each square in grid
        squares[i].onclick = function(){
        //if square below current one is taken, u can go on top of it
        if(squares[index + 7].classList.contains('taken')) //if u click on div, div below it (7 squares down) has a class name of taken, u can claim the div
        {
            if(currentPlayer === 1) //if u can go and ur player 1
            {
              squares[index].classList.add('taken') // add class name of taken to that square
              squares[index].classList.add('player-one') //also add classname of taken to square

              //change the player
              currentPlayer = 2
              displayCurrentPlayer.innerHTML= currentPlayer

            }
            //note: == attempts to convert both things to the samedata type, === doesnt convert
            else if (currentPlayer === 2){
                squares[index].classList.add('taken') // add class name of taken to that square
                squares[index].classList.add('player-two') //also add classname of taken to square

              //change the player
              currentPlayer = 1
              displayCurrentPlayer.innerHTML = currentPlayer

            }
            // if u arent 1 up from a square with class name taken, an alert saying u cant go there will come up
        }
        else alert('cant go here')
    }
    })(i)


//check the board for win or lose using a checkboard function

//declare what a winning combination is on the board

function checkBoard(){
    //make const that shows all winning arrays
    const winningArrays = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31],[14, 15, 16, 17],[27, 26, 25, 24],[21, 22, 23, 24],
        [20, 19, 18, 17],[28, 29, 30, 31],[13, 12, 11, 10],[35, 36, 37, 38],[6, 5, 4, 3],[0, 7, 14, 21],[41, 34, 27, 20],
        [1, 8, 15, 22],[40, 33, 26, 19],[2, 9, 16, 23],[39, 32, 25, 18],[3, 10, 17, 24],[38, 31, 24, 17],[4, 11, 18, 25],
        [37, 30, 23, 16],[5, 12, 19, 26],[36, 29, 22, 15],[6, 13, 20, 27],[35, 28, 21, 14],[0, 8, 16, 24],[41, 33, 25, 17],
        [7, 15, 23, 31],[34, 26, 18, 10],[14, 22, 30, 38],[27, 19, 11, 3],[35, 29, 23, 17],[6, 12, 18, 24],[28, 22, 16, 10],
        [13, 19, 25, 31],[21, 15, 9, 3],[20, 26, 32, 38],[36, 30, 24, 18],[5, 11, 17, 23],[37, 31, 25, 19],[4, 10, 16, 22],
        [2, 10, 18, 26],[39, 31, 23, 15],[1, 9, 17, 25],[40, 32, 24, 16],[9, 17, 25, 33],[8, 16, 24, 32],[11, 17, 23, 29],
        [12, 18, 24, 30],[1, 2, 3, 4],[5, 4, 3, 2],[8, 9, 10, 11],[12, 11, 10, 9],[15, 16, 17, 18],[19, 18, 17, 16],[22, 23, 24, 25],
        [26, 25, 24, 23],[29, 30, 31, 32],[33, 32, 31, 30],[36, 37, 38, 39],[40, 39, 38, 37],[7, 14, 21, 28],[8, 15, 22, 29],
        [9, 16, 23, 30],[10, 17, 24, 31],[11, 18, 25, 32],[12, 19, 26, 33],[13, 20, 27, 34],]

        //now take the 4 values in each array and plug into squares
        for(let y = 0; y < winningArrays.length; y++) //checks if the squares r n a winning array and contain the class name player 1
        {
            const square1 = squares[winningArrays[y][0]]
            const square2 = squares[winningArrays[y][1]]
            const square3 = squares[winningArrays[y][2]]
            const square4 = squares[winningArrays[y][3]]

            //now check arrays to see if they all have class player-one
            if(square1.classList.contains('player-one') &&
            square2.classList.contains('player-one') &&
            square3.classList.contains('player-one') &&
            square4.classList.contains('player-one') ) {
                //if its true, we want to say player 1 wins
                result.innerHTML = 'Player 1 is the winner!'

            }
            else if(square1.classList.contains('player-two') &&
            square2.classList.contains('player-two') &&
            square3.classList.contains('player-two') &&
            square4.classList.contains('player-two') ) {
                //if its true, we want to say player 2 wins
                result.innerHTML = 'Player 2 is the winner!'

            }

        }

    }

    //add an event listeneer to each square that will activate checkBoard function on click
    squares.forEach(square => square.addEventListener('click', checkBoard))





})