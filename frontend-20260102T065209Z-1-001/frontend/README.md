# VectorShift Frontend Technical Assessment

## Overview
This project implements a node-based pipeline builder using React Flow, along with a FastAPI backend for pipeline validation.

Users can:
- Create pipelines using Input, Text, and Output nodes
- Define dynamic variables inside Text nodes using `{{variable}}`
- Submit pipelines for backend validation

---

## Frontend
- Built using React and React Flow
- Text nodes dynamically resize as text grows
- Text nodes detect variables written using `{{variable}}` and create corresponding input handles
- Submit button sends nodes and edges to backend for validation

### Run Frontend
```bash
cd frontend
npm install
npm start