var { node } = require('../helpers/graph')
var { log } = require('../helpers/logger')

exports.ucs = (root = new node(), finding = '') => {
  let queue = [root]
  while (queue.length) {
    log(queue.map(el => el.toString()))
    let n = queue.shift()
    if (n.isNode(finding)) return n.data()
    if (n.hasChild()) {
      queue.push(...n.children)
      queue.sort((a, b) => {
        return a.pathCost > b.pathCost
      })
    }
  }
  return -1
}
