/**
 * Finds the shortest paths from a start product to all other products in a graph
 * @param {number[][]} graph - Adjacency matrix representing product relationships and weights
 * @param {number} startProduct - Index of the starting product node
 * @returns {Object} Object containing distances and previous nodes for shortest paths
 */
function dijkstra(graph, startProduct) {
  // Get the number of nodes in the graph (number of products)
  let n = graph.length;
  
  // Initialize distances and previous nodes
  let distances = new Array(n).fill(Infinity);
  let visited = new Array(n).fill(false);
  
  // Distance to start node is 0
  distances[startProduct] = 0;

  // Main loop to find shortest paths
  for (let i = 0; i < n; i++) {
    let minIndex = getMinIndex(distances, visited); // Get the index of the node with the smallest distance that has not been visited
    if (minIndex === -1) // All nodes have been visited or are unreachable
      break;
    visited[minIndex] = true; // Mark the node as visited
    updateDistances(distances, graph, minIndex); // Update distances to all nodes connected to the current node
  }

  return distances;
}

/**
 * Finds the index of the node with the smallest distance that has not been visited
 * @param {number[]} distances - Array of distances from the start node to all nodes
 * @param {boolean[]} visited - Array indicating which nodes have been visited
 * @returns {number} Index of the node with the smallest distance that has not been visited
 */
function getMinIndex(distances, visited) {
  let minIndex = -1;
  for (let i = 0; i < distances.length; i++) {
    if (!visited[i] && (minIndex === -1 || distances[i] < distances[minIndex])) {
      minIndex = i;
    }
  }
  return minIndex;
}

/**
 * Updates the distances to all nodes connected to the current node
 * @param {number[]} distances - Array of distances from the start node to all nodes
 * @param {number[][]} graph - Adjacency matrix representing product relationships and weights
 * @param {number} minIndex - Index of the current node
 */
function updateDistances(distances, graph, minIndex) {
  for (let i = 0; i < graph.length; i++) {
    if (graph[minIndex][i] !== 0) {
      let newDistance = distances[minIndex] + graph[minIndex][i];
      if (newDistance < distances[i]) {
        distances[i] = newDistance;
      }
    }
  }
}

module.exports = dijkstra;
