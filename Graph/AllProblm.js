class Graph {
  constructor() {
    this.values = {}
  }

  addVertex(vertex) {
    if (!this.values[vertex]) {
      this.values[vertex] = new Set()
    }
  }

  addEdges(vertex1, vertex2) {
    if (!this.values[vertex1]) {
      this.addVertex(vertex1)
    }

    if (!this.values[vertex2]) {
      this.addVertex(vertex2)
    }

    this.values[vertex1].add(vertex2)
    this.values[vertex2].add(vertex1)

  }

  hasEdges(vertex1, vertex2) {
    return (
      (this.values[vertex1].has(vertex2))
      &&
      (this.values[vertex2].has(vertex1))
    )
  }

  removeEdges(vertex1, vertex2) {
    this.values[vertex1].delete(vertex2)
    this.values[vertex2].delete(vertex1)
  }

  removeVertex(vertex) {
    if (!this.values[vertex]) {
      return;
    }

    for (let x of this.values[vertex]) {
      this.removeEdges(x, vertex)
    }

    delete this.values[vertex]
  }

  display() {
    for (let x in this.values) {
      console.log(`${x}.....${[...this.values[x]]}`);
    }
  }


  bfs(graph,start){
    let visited = new Set()
    let queue=[start]

    while(queue.length){
      let node = queue.shift()
      if(!visited.has(node)){
        visited.add(node)
        console.log(node);
      }

      graph[node].forEach(element => {
          if(!visited.has(element)){
            queue.push(element)
          }
      });
    }
  }

  // DFS
  dfs(graph,start){
    let visited = new Set()

    function defSearch(vertex){
      if(!visited.has(vertex)){
        visited.add(vertex)
        console.log(vertex);
      }

      graph[vertex].forEach((element)=>{
        if(!visited.has(element)){
          defSearch(element)
        }
      })
    }defSearch(start)
  }

}

var graph = new Graph()
graph.addEdges('A', 'B')
graph.addEdges('A', 'F')
graph.addEdges('B', 'C')
graph.addEdges('B', 'D')
graph.addEdges('B', 'M')

// console.log(graph.hasEdges('A','D'));
// graph.removeVertex('B')
// graph.display()
// graph.bfs(graph.values,'A')
// graph.dfs(graph.values,'A')