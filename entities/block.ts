function blocks(map:any,bombs:any,Tile:any,explode:any){for (let y = 1; y < map.length; y++) {
    for (let x = 1; x < map[y].length; x++) {
      checkblocks(map,bombs,Tile,explode,x,y);
    }
}
}

function checkblocks(map:any,bombs:any,Tile:any,explode:any,x:any,y:any){
    if (map[y][x] === Tile.BOMB) {
        map[y][x] = Tile.BOMB_CLOSE;
      } else if (map[y][x] === Tile.BOMB_CLOSE) {
        map[y][x] = Tile.BOMB_REALLY_CLOSE;
      } else if (map[y][x] === Tile.BOMB_REALLY_CLOSE) {
        explode(x + 0, y - 1, Tile.FIRE);
        explode(x + 0, y + 1, Tile.TMP_FIRE);
        explode(x - 1, y + 0, Tile.FIRE);
        explode(x + 1, y + 0, Tile.TMP_FIRE);
        map[y][x] = Tile.FIRE;
        bombs++;
      } else if (map[y][x] === Tile.TMP_FIRE) {
        map[y][x] = Tile.FIRE;
      } else if (map[y][x] === Tile.FIRE) {
        map[y][x] = Tile.AIR;
      } else if (map[y][x] === Tile.TMP_MONSTER_DOWN) {
        map[y][x] = Tile.MONSTER_DOWN;
      } else if (map[y][x] === Tile.TMP_MONSTER_RIGHT) {
        map[y][x] = Tile.MONSTER_RIGHT;
      } else if (map[y][x] === Tile.MONSTER_RIGHT) {
        if (map[y][x + 1] === Tile.AIR) {
          map[y][x] = Tile.AIR;
          map[y][x + 1] = Tile.TMP_MONSTER_RIGHT;
        } else {
          map[y][x] = Tile.MONSTER_DOWN;
        }
      } else if (map[y][x] === Tile.MONSTER_DOWN) {
        if (map[y + 1][x] === Tile.AIR) {
          map[y][x] = Tile.AIR;
          map[y + 1][x] = Tile.TMP_MONSTER_DOWN;
        } else {
          map[y][x] = Tile.MONSTER_LEFT;
        }
      } else if (map[y][x] === Tile.MONSTER_LEFT) {
        if (map[y][x - 1] === Tile.AIR) {
          map[y][x] = Tile.AIR;
          map[y][x - 1] = Tile.MONSTER_LEFT;
        } else {
          map[y][x] = Tile.MONSTER_UP;
        }
      } else if (map[y][x] === Tile.MONSTER_UP) {
        if (map[y - 1][x] === Tile.AIR) {
          map[y][x] = Tile.AIR;
          map[y - 1][x] = Tile.MONSTER_UP;
        } else {
          map[y][x] = Tile.MONSTER_RIGHT;
        }
      }
}
