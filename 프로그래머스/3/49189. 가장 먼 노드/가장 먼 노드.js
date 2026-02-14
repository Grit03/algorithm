function solution(n, edge) {
    const graph = Array.from({length: n+1 }, () => []);
    for(const [node1, node2] of edge){
        graph[node1].push(node2);
        graph[node2].push(node1);
    }
    
    
    const queue = [[1, 0]]; // 노드 번호, 거리
    let head = 0;
    const visited = new Array(n+1).fill(-1);
    visited[1] = 0;
    
    while(head < queue.length){
        const [node, dist] = queue[head++];
        for(const next of graph[node]){
            if(visited[next] >= 0) continue;
            queue.push([next, dist + 1]);
            visited[next] = dist + 1; // 방문 표시
        }
        
    }
    
    const max = Math.max(...visited);
    
    return visited.filter((dist) => dist === max).length;
}