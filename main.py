from maze import Maze
from player import Player

map = [['#','#','#','#','#'],
       ['E',' ','#','#','#'],
       ['#',' ','P',' ','#'],
       ['#',' ',' ','#','#'],
       ['#','#','#','#','#']]

mazeObj = Maze(map)

startIndx = mazeObj.findStartingPoint()
winningIndx = mazeObj.findWinningSpot()

player = Player(startIndx)
win_flag = 0

while not win_flag:

    mazeObj.display()
    player.move(mazeObj.map)
    mazeObj.display()
    
    win_flag = player.current_pos == winningIndx

print('Congratulations! You made it out!')



