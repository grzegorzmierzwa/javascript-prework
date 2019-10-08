{
    function playGame(playerInput){
        const randomNumber = Math.floor(Math.random() * 3 + 1),
            computerMove = getMoveName(randomNumber),
            playerMove = getMoveName(playerInput),
            argComputerMove = computerMove,
            argPlayerMove = playerMove,
            clear = clearMessages ();

        function getMoveName(argMoveId){
            if(argMoveId == 1){
                return 'kamień';
            } else if(argMoveId == 2){
                return 'papier';
            } else if(argMoveId == 3){
                return 'nożyce';
            } else {
                printMessage('Nie znam ruchu o id ' + argMoveId + '.');
                return 'nieznany ruch';
            }
        }

        function displayResult(argComputerMove, argPlayerMove){
            if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
                printMessage('Wygrywasz!');
            }
            else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
                printMessage('Remis!');
            }
            else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
                printMessage('Przegrywasz!');
            }
            else if (argComputerMove == 'papier' && argPlayerMove == 'papier'){
                printMessage('Remis!');
            }
            else if (argComputerMove == 'papier' && argPlayerMove == 'kamień'){
                printMessage('Przegrywasz!');
            }
            else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
                printMessage('Wygrywasz!');
            }
            else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
                printMessage('Przegrywasz!');
            }
            else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
                printMessage('Wygrywasz!');
            }
            else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
                printMessage('Remis!');
            }
        }
        
        const messageOne = printMessage('Mój ruch to: ' + computerMove),
            messageTwo = printMessage('Twój ruch to: ' + playerMove),
            result = displayResult(argComputerMove, argPlayerMove);

        console.log('Wylosowana liczba to: ' + randomNumber);
        console.log('Gracz wpisał: ' + playerInput);
        console.log('moves:', argComputerMove, argPlayerMove);
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}