var { node } = require('../helpers/graph')
var { log } = require('../helpers/logger')

exports.greedy_search = (root = new node(), finding = '') => {
  let queue = [root]
  while (queue.length) {
    log(queue.map(el => el.toString(el.heuristic)))
    let n = queue.shift()
    if (n.isNode(finding)) return n.data()
    if (n.hasChild()) {
      queue.push(...n.children)
      queue.sort((a, b) => {
        return a.heuristic > b.heuristic
      })
    }
  }
  return -1
}
