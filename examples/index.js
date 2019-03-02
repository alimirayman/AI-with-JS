var { algo, createGraph } = require('../index')

var data = [
  //val,  pathCost, heuristic,  edge
  ['S', 0, 8, 3],
  ['A', 3, 8, 3],
  ['D', 3, Infinity, 0],
  ['E', 7, Infinity, 0],
  ['G', 15, 0, 0],
  ['B', 1, 4, 1],
  ['G', 20, 0, 0],
  ['C', 8, 3, 1],
  ['G', 5, 0, 0]
]

let root = createGraph(data)

let bfs = `==========BFS==========`
console.time(bfs)
console.log(algo.bfs(root, 'G'))
console.timeEnd(bfs)

let dfs = `==========DFS==========`
console.time(dfs)
console.log(algo.dfs(root, 'G'))
console.timeEnd(dfs)

let ucs = `==========UCS==========`
console.time(ucs)
console.log(algo.ucs(root, 'G'))
console.timeEnd(ucs)

let greedy = `==========GreedyS==========`
console.time(greedy)
console.log(algo.greedy_search(root, 'G'))
console.timeEnd(greedy)

let a_star = `==========A_star_Alg0==========`
console.time(a_star)
console.log(algo.a_star_search(root, 'G'))
console.timeEnd(a_star)
