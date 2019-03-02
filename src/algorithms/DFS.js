var { node } = require('../helpers/graph')
var { log } = require('../helpers/logger')

exports.dfs = (root = new node(), finding = '') => {
  let queue = [root]
  while (queue.length) {
    log(queue.map(el => el.toString()))
    let n = queue.shift()
    if (n.isNode(finding)) return n.data()
    if (n.hasChild()) queue.unshift(...n.children)
  }
  return -1
}
