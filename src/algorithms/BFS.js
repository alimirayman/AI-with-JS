var { node } = require('../helpers/graph')
var { log } = require('../helpers/logger')

exports.bfs = (root = new node(), finding = '') => {
  let queue = [root]
  while (queue.length) {
    log(queue.map(el => el.toString()))
    let n = queue.shift()
    if (n.isNode(finding)) return n.data()
    if (n.hasChild()) queue.push(...n.children)
  }
  return -1
}
