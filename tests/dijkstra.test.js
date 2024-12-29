const dijkstra = require("../src/dijkstra")

describe("Dijkstra's Algorithm", () => {
  test("Basic graph with 4 nodes", () => {
    const graph = [
      [0, 4, 0, 0],
      [4, 0, 8, 0],
      [0, 8, 0, 7],
      [0, 0, 7, 0],
    ]
    const startNode = 0
    const expected = [0, 4, 12, 19] // Distances from node 0 to all others
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })

  test("Basic graph with 5 nodes", () => {
    const graph = [
      [0, 2, 0, 1, 0],
      [2, 0, 3, 0, 0],
      [0, 3, 0, 4, 0],
      [1, 0, 4, 0, 5],
      [0, 0, 0, 5, 0],
    ]
    const startNode = 0
    const expected = [0, 2, 5, 1, 6]
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })

  test("Basic graph with 6 nodes", () => {
    const graph = [
      [0, 4, 0, 0, 0, 0],
      [4, 0, 8, 0, 0, 0],
      [0, 8, 0, 7, 0, 4],
      [0, 0, 7, 0, 9, 14],
      [0, 0, 0, 9, 0, 10],
      [0, 0, 4, 14, 10, 0],
    ]
    const startNode = 0
    const expected = [0, 4, 12, 19, 26, 16]
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })

  test("Graph with disconnected nodes", () => {
    const graph = [
      [0, 4, 0, 0],
      [4, 0, 8, 0],
      [0, 8, 0, 0],
      [0, 0, 0, 0], // Node 3 is disconnected
    ]
    const startNode = 0
    const expected = [0, 4, 12, Infinity] // Node 3 is unreachable
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })

  test("Graph with a single node", () => {
    const graph = [[0]]
    const startNode = 0
    const expected = [0] // The only node's distance is 0
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })

  test("Graph with multiple shortest paths", () => {
    const graph = [
      [0, 1, 4, 0],
      [1, 0, 2, 6],
      [4, 2, 0, 3],
      [0, 6, 3, 0],
    ]
    const startNode = 0
    const expected = [0, 1, 3, 6] // Node 2 can be reached via node 1 or directly
    expect(dijkstra(graph, startNode)).toEqual(expected)
  })
})
