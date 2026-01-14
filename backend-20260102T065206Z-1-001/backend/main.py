from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

# CORS — allow Vercel frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://vector-shift-dag-assignment.vercel.app"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class Node(BaseModel):
    id: str


class Edge(BaseModel):
    source: str
    target: str


class Pipeline(BaseModel):
    nodes: List[Node]
    edges: List[Edge]


def is_dag(nodes, edges):
    graph = {n.id: [] for n in nodes}
    for e in edges:
        graph[e.source].append(e.target)

    visited = set()
    stack = set()

    def dfs(v):
        if v in stack:
            return False
        if v in visited:
            return True

        visited.add(v)
        stack.add(v)

        for nei in graph[v]:
            if not dfs(nei):
                return False

        stack.remove(v)
        return True

    return all(dfs(n.id) for n in nodes)


@app.get("/")
def read_root():
    return {"Ping": "Pong"}


@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": is_dag(pipeline.nodes, pipeline.edges),
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=10000)
