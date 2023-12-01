from maze import Maze
from player import Player

map = [['#','#','#','#','#'],
       ['E',' ','#','#','#'],
       ['#',' ','P',' ','#'],
       ['#',' ',' ','#','#'],
       ['#','#','#','#','#']]

map2 = [['#','#','#','#','#','#','#','#','#','#'],
        ['#',' ',' ',' ','#','#','#','#','#','#'],
        ['#',' ','#',' ','#',' ','#',' ','#','#'],
        ['#',' ','#',' ',' ',' ','#',' ','#','#'],
        ['#',' ','#','#','#',' ','#',' ','#','#'],
        ['E',' ',' ',' ','#','P',' ',' ','#','#'],
        ['#','#','#','#','#','#','#',' ','#','#'],
        ['#','#','#',' ','#','#','#',' ','#','#'],
        ['#','#','#',' ',' ',' ',' ',' ','#','#'],
        ['#','#','#','#','#','#','#','#','#','#']]

# List of our maps
maps = [map,map2]


mazeObj = Maze(maps.pop(0))

startIndx = mazeObj.findStartingPoint()
winningIndx = mazeObj.findWinningSpot()

# Hold x and y values of the exit
win_x = winningIndx[0]
win_y = winningIndx[1]

# Change winning tile to blank space (initially it is 'E')
mazeObj.map[win_x][win_y] = ' '


player = Player(startIndx)
win_flag = False

while not win_flag:

    mazeObj.display()
    player.move(mazeObj.map)

    win_flag = player.current_pos == winningIndx
    if win_flag:
        print('----------Level Completed!----------')
        mazeObj.display()
        print('Congratulations! You made it out!')
        if maps:
            moveToNextLevel = input('Would you like to play the next level? (Y/N)')
            while moveToNextLevel.upper() not in ['Y','N']:
                moveToNextLevel = input('Invalid. Enter Y or N: ')
            if moveToNextLevel.upper() == 'Y':
                mazeObj.map = maps.pop(0)
                startIndx = mazeObj.findStartingPoint()
                winningIndx = mazeObj.findWinningSpot()
                player.current_pos = startIndx
                # Hold x and y values of the exit
                win_x = winningIndx[0]
                win_y = winningIndx[1]
                # Change winning tile to blank space (initially it is 'E')
                mazeObj.map[win_x][win_y] = ' '
                win_flag = False
        else:
            print('You have completed all levels.')