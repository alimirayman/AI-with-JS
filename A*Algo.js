var node = require('./node')
var { createGraph } = require('./graph')

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

function A_star_Alg0(root = new node(), finding = '') {
  let queue = [root]
  while (queue.length) {
    console.log(queue.map(el => el.toString(el.heuristic + el.pathCost)))
    let n = queue.shift()
    if (n.isNode(finding)) return n.data()
    if (n.hasChild()) {
      queue.push(...n.children)
      queue.sort((a, b) => {
        return a.heuristic + a.pathCost > b.heuristic + b.pathCost
      })
    }
  }
  return -1
}

console.time(`==========A_star_Alg0==========`)
console.log(A_star_Alg0(root, 'G'))
console.timeEnd(`==========A_star_Alg0==========`)
