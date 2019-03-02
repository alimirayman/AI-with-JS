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

describe('algorithms', () => {
  test('Breadth First Search', () => {
    let node = algo.bfs(root, 'G')
    expect(node.parent).toBe('A')
    expect(node.pathCost).toBe(18)
  })
  test('Depth-first search', () => {
    let node = algo.dfs(root, 'G')
    expect(node.parent).toBe('A')
    expect(node.pathCost).toBe(18)
  })
  test('Uniform Cost Search', () => {
    let node = algo.ucs(root, 'G')
    expect(node.parent).toBe('C')
    expect(node.pathCost).toBe(13)
  })
  test('Greedy Search', () => {
    let node = algo.greedy_search(root, 'G')
    expect(node.parent).toBe('C')
    expect(node.pathCost).toBe(13)
  })
  test('A* search', () => {
    let node = algo.a_star_search(root, 'G')
    expect(node.parent).toBe('C')
    expect(node.pathCost).toBe(13)
  })
})
