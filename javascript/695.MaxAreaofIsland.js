// https://leetcode-cn.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var maxArea = 0;
  for(var i = 0; i < grid.length; i++) {
      for(var j = 0; j < grid[0].length; j++) {
          if (grid[i][j] !== 0) {
              maxArea = Math.max(maxArea, findIslandAround(grid, i, j));
          }
      }
  }
  return maxArea;
};

function findIslandAround(grid, i, j) {
  if (i >= 0 && i < grid.length && j >= 0 && j < grid[i].length && grid[i][j]) {
      grid[i][j] = 0;
      return 1 + findIslandAround(grid, i+1, j) + findIslandAround(grid, i, j-1)
          + findIslandAround(grid, i, j+1) + findIslandAround(grid, i-1, j);
  }
  return 0;
}
