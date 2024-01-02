class Graph{
    constructor(){
        this.values = {}
    }

    addVertex(vertex){
        if(!this.values[vertex]){
            this.values[vertex]= new Set()
        }
    }

    addEdges(vertex1,vertex2){
        if(!this.values[vertex1]){
            this.addVertex(vertex1)
        }

        if(!this.values[vertex2]){
            this.addVertex(vertex2)
        }

        this.values[vertex1].add(vertex2)
        this.values[vertex2].add(vertex1)
    }

    display() {
        for (let x in this.values) {
            console.log(x + '.....' + [...this.values[x]]);
        }
    }
}


var graph = new Graph()
graph.addEdges('A','B')
graph.addEdges('B' ,'C')


graph.display()