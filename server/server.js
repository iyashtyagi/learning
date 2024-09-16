const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();

app.use(cors());

app.get("/todos",(req,res)=>{
    console.log(req.headers);
    const todos = [
        {
          "id": 1,
          "title": "Complete project proposal",
          "description": "Prepare and submit the proposal for the fleet tracking app project."
        },
        {
          "id": 2,
          "title": "Study TypeScript basics",
          "description": "Go through TypeScript documentation and understand the core concepts."
        },
        {
          "id": 3,
          "title": "Review React custom hooks",
          "description": "Revise custom hooks in React and implement them in a small app."
        },
        {
          "id": 4,
          "title": "Optimize Career Bridge backend",
          "description": "Improve the backend performance by refining SQL queries and API calls."
        },
        {
          "id": 5,
          "title": "Plan 7th semester final exam preparation",
          "description": "Create a study plan and focus on the most critical subjects for the finals."
        }
    ];
    setTimeout(()=>{res.json({ todos });},1000);
    
})

app.get("/search",(req,res)=>{
  const data = `This was your query: ${req.query.search}`;
  console.log({data})
  res.json({ data });
})

app.listen(port, () => {
    console.log(`Server started: ${port}`);
})