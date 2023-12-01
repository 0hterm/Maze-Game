export class Maze {
    constructor(map) {
        this.map = map;
    }

    display() {
        for (let i = 0; i < this.map.length; i++) {
            console.log(this.map[i]);
        }
    }

    findWinningSpot() {
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 'E') {
                    return [i,j];
                }
            }
        }
    }

    findStartingPoint() {
        for (let i = 0; i < this.map.length; i++) {
            for (let j = 0; j < this.map[i].length; j++) {
                if (this.map[i][j] == 'P') {
                    return [i,j]
                }
            }
        }
    }
}