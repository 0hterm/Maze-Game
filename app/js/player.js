//const readline = require('readline');
import readlineSync from 'readline-sync';


export class Player {
    constructor(startingPos) {
        this.current_pos = startingPos;
    }

    checkValidMove(key,map) {
        if (key.toUpperCase() == 'W') {
            if (map[this.current_pos[0]-1][this.current_pos[1]] == '#' || this.current_pos[0] == 0) {
                return false;
            }
        }else if (key.toUpperCase() == 'A') {
            if (map[this.current_pos[0][this.current_pos[1]-1]] == '#' || this.current_pos[1] == 0) {
                return false;
            }
        }else if (key.toUpperCase() == 'S') {
            if (map[this.current_pos[0]+1][this.current_pos[1]] == '#' || this.current_pos[0] == map.length-1) {
                return false;
            }
        }else if (key.toUpperCase() == 'D') {
            if (map[this.current_pos[0]][this.current_pos[1]+1] == '#' || this.current_pos[1] == map[0].length-1) {
                return false;
            }
        }
        else {
            return false;
        }
        return true;
    }

    move(map) {
        let flag = true;
        while (flag){
            let key = readlineSync.question('Enter W, A, S, or D: ');
            while (!this.checkValidMove(key,map)) {
                key = readlineSync.question('Invalid. Enter W, A, S, or D: ');
            }
            flag = false;
            switch (key.toUpperCase()) {
                case 'W':
                    map[this.current_pos[0]-1][this.current_pos[1]] = 'P';
                    this.current_pos[0] -= 1;
                    map[this.current_pos[0]+1][this.current_pos[1]] = ' ';
                    break;
                case 'A':
                    map[this.current_pos[0]][this.current_pos[1]-1] = 'P';
                    this.current_pos[1] -= 1;
                    map[this.current_pos[0]][this.current_pos[1]+1] = ' ';
                    break;
                case 'S':
                    map[this.current_pos[0]+1][this.current_pos[1]] = 'P';
                    this.current_pos[0] += 1;
                    map[this.current_pos[0]-1][this.current_pos[1]] = ' ';
                    break;
                case 'D':
                    map[this.current_pos[0]][this.current_pos[1]+1] = 'P';
                    this.current_pos[1] += 1;
                    map[this.current_pos[0]][this.current_pos[1]-1] = ' ';
                    break;
            }
        
        // --- Different way of handling movement; wasn't working ---

        /*while (this.checkValidMove(key,map)) {
            key = prompt('Must enter valid spot. Enter W, A, S, or D: ');
        }*/
        
        /*
        if (key.toUpperCase() == 'W') {
            map[this.current_pos[0]-1][this.current_pos[1]] = 'P';
            this.current_pos[0] -= 1;
            map[this.current_pos[0]+1][this.current_pos[1]] = ' ';
        }else if (key.toUpperCase() == 'A') {
            map[this.current_pos[0]][this.current_pos[1]-1] = 'P';
            this.current_pos[1] -= 1;
            map[this.current_pos[0]][this.current_pos[1]+1] = ' ';
        }else if (key.toUpperCase() == 'S') {
            map[this.current_pos[0]+1][this.current_pos[1]] = 'P';
            this.current_pos[0] += 1;
            map[this.current_pos[0]-1][this.current_pos[1]] = ' ';
        }else if (key.toUpperCase() == 'D') {
            map[this.current_pos[0]][this.current_pos[1]+1] = 'P';
            this.current_pos[1] += 1;
            map[this.current_pos[0]][this.current_pos[1]-1] = ' ';
        }
        */
        
        }
    }
}