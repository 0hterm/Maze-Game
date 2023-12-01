class Player:
    def __init__(self,startingPos):
        self.current_pos = startingPos

    
    def move(self,map):
        key = str(input('Enter W, A, S, or D: '))
        while not self.checkValidMove(key,map):
            key = str(input('Must enter valid spot. Enter W, A, S, or D: '))
        
        if self.checkValidMove(key,map):
            if key.upper() == 'W':
                map[self.current_pos[0]-1][self.current_pos[1]] = 'P'
                self.current_pos[0] -= 1
                map[self.current_pos[0]+1][self.current_pos[1]] = ' '
            elif key.upper() == 'A':
                map[self.current_pos[0]][self.current_pos[1]-1] = 'P'
                self.current_pos[1] -= 1
                map[self.current_pos[0]][self.current_pos[1]+1] = ' '
            elif key.upper() == 'S':
                map[self.current_pos[0]+1][self.current_pos[1]] = 'P'
                self.current_pos[0] += 1
                map[self.current_pos[0]-1][self.current_pos[1]] = ' '
            elif key.upper() == 'D':
                map[self.current_pos[0]][self.current_pos[1]+1] = 'P'
                self.current_pos[1] += 1
                map[self.current_pos[0]][self.current_pos[1]-1] = ' '

    
    def checkValidMove(self,key,map):
        if key.upper() == 'W':
            if map[self.current_pos[0]-1][self.current_pos[1]] == '#':
                return False
            if self.current_pos[0] == 0:
                return False
        elif key.upper() == 'A':
            if map[self.current_pos[0]][self.current_pos[1]-1] == '#':
                return False
            if self.current_pos[1] == 0:
                return False
        elif key.upper() == 'S':
            if map[self.current_pos[0]+1][self.current_pos[1]] == '#':
                return False
            if self.current_pos[0] == len(map)-1:
                return False
        elif key.upper() == 'D':
            if map[self.current_pos[0]][self.current_pos[1]+1] == '#':
                return False
            if self.current_pos[1] == len(map[0])-1:
                return False
        else:
            return False
        return True        