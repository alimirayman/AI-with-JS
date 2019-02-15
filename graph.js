var node = require('./node')
function createGraph(data) {
  let [value, pathCost, heuristic, edge] = data[0]
  const root = new node(null, value, pathCost, heuristic)
  let store = [
    {
      parent: root,
      edge
    }
  ]
  let cur = store[0]
  let i = 0
  while (cur.edge-- > 0) {
    i++
    let [value, pathCost, heuristic, edge] = data[i]
    let n = new node(cur.parent, value, pathCost, heuristic)
    cur.parent.addChild(n)
    if (edge > 0) {
      store.push({
        parent: n,
        edge
      })
      cur = store[store.length - 1]
    } else if (cur.edge == 0) {
      store.pop()
      cur = store[store.length - 1]
    }
  }
  return root
}

module.exports = {
  createGraph
}
