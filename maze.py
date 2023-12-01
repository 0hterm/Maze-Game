class Maze:
    def __init__(self,map):
        self.map = map
    
    def display(self):
        for i in range(len(self.map)):
            print(self.map[i])

    def findWinningSpot(self):
        for i in range(len(self.map)):
            for j in range(len(self.map[i])):
                if self.map[i][j] == 'E':
                    return [i, j]
    
    def findStartingPoint(self):
        for i in range(len(self.map)):
            for j in range(len(self.map[i])):
                if self.map[i][j] == 'P':
                    return [i, j]  