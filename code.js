function hasCycle(graph) {
    function dfs(graph, node, visited, parent) {
        visited[node] = true

        for (var neighbor of graph[node]) {
            if (!visited[neighbor] && dfs(graph, neighbor, visited, node)) return true
            else if (neighbor != parent) return true
        }
        
        return false
    }

    var visited = new Array(graph.length).fill(false)
    for (i = 0; i < graph.length; i++) {
        if (!visited[i] && dfs(graph, i, visited, -1)) return true
    }
    return false
}