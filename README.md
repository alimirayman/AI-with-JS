# AI-with-JS

![Graph](./Graph.png)

## BFS (Breadth-first search)

```bash
[ 'S(0)' ]
[ 'A(3)', 'B(1)', 'C(8)' ]
[ 'B(1)', 'C(8)', 'D(6)', 'E(10)', 'G(18)' ]
[ 'C(8)', 'D(6)', 'E(10)', 'G(18)', 'G(21)' ]
[ 'D(6)', 'E(10)', 'G(18)', 'G(21)', 'G(13)' ]
[ 'E(10)', 'G(18)', 'G(21)', 'G(13)' ]
[ 'G(18)', 'G(21)', 'G(13)' ]
{ parent: 'A', pathCost: 18, value: 'G' }
==========BFS==========: 3.702ms
```

## DFS (Depth-first search)

```bash
[ 'S(0)' ]
[ 'A(3)', 'B(1)', 'C(8)' ]
[ 'D(6)', 'E(10)', 'G(18)', 'B(1)', 'C(8)' ]
[ 'E(10)', 'G(18)', 'B(1)', 'C(8)' ]
[ 'G(18)', 'B(1)', 'C(8)' ]
{ parent: 'A', pathCost: 18, value: 'G' }
==========DFS==========: 3.713ms
```

## UCS (Uniform Cost Search)

```bash
[ 'S(0)' ]
[ 'B(1)', 'A(3)', 'C(8)' ]
[ 'A(3)', 'C(8)', 'G(21)' ]
[ 'D(6)', 'C(8)', 'E(10)', 'G(18)', 'G(21)' ]
[ 'C(8)', 'E(10)', 'G(18)', 'G(21)' ]
[ 'E(10)', 'G(13)', 'G(18)', 'G(21)' ]
[ 'G(13)', 'G(18)', 'G(21)' ]
{ parent: 'C', pathCost: 13, value: 'G' }
==========UCS==========: 3.778ms
```

## Greedy Search

```bash
[ 'S(8)' ]
[ 'C(3)', 'B(4)', 'A(8)' ]
[ 'G(13)', 'B(4)', 'A(8)' ]
{ parent: 'C', pathCost: 13, value: 'G' }
==========GreedyS==========: 3.791ms
```

## A\* Algorithm

```bash
[ 'S(8)' ]
[ 'B(5)', 'A(11)', 'C(11)' ]
[ 'A(11)', 'C(11)', 'G(21)' ]
[ 'C(11)', 'G(18)', 'G(21)', 'D(Infinity)', 'E(Infinity)' ]
[ 'G(13)', 'G(18)', 'G(21)', 'D(Infinity)', 'E(Infinity)' ]
{ parent: 'C', pathCost: 13, value: 'G' }
==========A_star_Alg0==========: 4.006ms
```

### Use program

```
npm install alimirayman/ai-with-js
```

```js
var { algo, createGraph } = require('ai-with-js')

var data = [
  //value,  pathCost, heuristic,  edge
  ['S', 0, 8, 3],
  ['A', 3, 8, 1],
  ['E', 7, Infinity, 0],
  ['B', 1, 4, 1],
  ['G', 20, 0, 0],
  ['C', 8, 3, 1],
  ['G', 5, 0, 0]
]

let root = createGraph(data)

console.log(algo.bfs(root, 'G'))
// { parent: 'A', chain: [ 'A', 'S' ], pathCost: 18, value: 'G' }
```

### Run Example and See calculation

`pull the repo run command`

```
npm run example
```

### TEST

```
npm test
```

```bash
 PASS  __test__/algo.test.js
  algorithms
    ✓ Breadth First Search (3ms)
    ✓ Depth-first search
    ✓ Uniform Cost Search (1ms)
    ✓ Greedy Search
    ✓ A* search (1ms)
```
