// $ git branch player
//player 






  function placeBomb() {
    if (bombs > 0) {
      map[playery][playerx] = Tile.BOMB;
      bombs--;
    }
  }

  function explode(x: number, y: number, type: Tile) {
    if (map[y][x] === Tile.STONE) {
      if (Math.random() < 0.1) map[y][x] = Tile.EXTRA_BOMB;
      else map[y][x] = type;
    } else if (map[y][x] !== Tile.UNBREAKABLE) {
      if (
        map[y][x] === Tile.BOMB ||
        map[y][x] === Tile.BOMB_CLOSE ||
        map[y][x] === Tile.BOMB_REALLY_CLOSE
      )
        bombs++;
      map[y][x] = type;
    }
  }

  


  