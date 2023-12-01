import {Maze} from './maze.js';
import {Player} from './player.js';
import readlineSync from 'readline-sync';

const map = [['#','#','#','#','#'],
       ['E',' ','#','#','#'],
       ['#',' ','P',' ','#'],
       ['#',' ',' ','#','#'],
       ['#','#','#','#','#']]

const map2 = [['#','#','#','#','#','#','#','#','#','#'],
        ['#',' ',' ',' ','#','#','#','#','#','#'],
        ['#',' ','#',' ','#',' ','#',' ','#','#'],
        ['#',' ','#',' ',' ',' ','#',' ','#','#'],
        ['#',' ','#','#','#',' ','#',' ','#','#'],
        ['E',' ',' ',' ','#','P',' ',' ','#','#'],
        ['#','#','#','#','#','#','#',' ','#','#'],
        ['#','#','#',' ','#','#','#',' ','#','#'],
        ['#','#','#',' ',' ',' ',' ',' ','#','#'],
        ['#','#','#','#','#','#','#','#','#','#']]

// List of maps
let maps = [map,map2]

// Create maze object with the first map
let mazeObject = new Maze(maps.shift())

// Find important indexes
let startIndx = mazeObject.findStartingPoint();
let winningIndx = mazeObject.findWinningSpot();

// Hold x and y values of the exit
let winningIndx_x = winningIndx[0];
let winningIndx_y = winningIndx[1];

// Change winning tile to blank space (hide it)
mazeObject.map[winningIndx_x][winningIndx_y] = ' ';

// Create player object
let player = new Player(startIndx);
let win_flag = false;

while (!win_flag) {
    mazeObject.display();
    player.move(mazeObject.map);

    win_flag = player.current_pos[0] === winningIndx[0] && player.current_pos[1] === winningIndx[1];;
    if (win_flag) {
        console.log('----------Level Completed!----------');
        mazeObject.display();
        console.log('Congratulations! You made it out!');
        if (maps.length > 0) {
            let moveToNextLevel = readlineSync.question('Would you like to play the next level? (Y/N)');
            while (moveToNextLevel.toUpperCase() != 'Y' && moveToNextLevel.toUpperCase() != 'N') {
                moveToNextLevel = readlineSync.question('Invalid: Enter Y or N: ');
            }
            if (moveToNextLevel.toUpperCase() == 'Y') {
                // Set variables for next map
                mazeObject.map = maps.shift();
                startIndx = mazeObject.findStartingPoint();
                winningIndx = mazeObject.findWinningSpot();
                player.current_pos = startIndx;
                winningIndx_x = winningIndx[0];
                winningIndx_y = winningIndx[1];
                mazeObject.map[winningIndx_x][winningIndx_y] = ' ';
                win_flag = false;
            }
        }
        else {
            console.log('You have completed all the levels.');
        }
    }
}
