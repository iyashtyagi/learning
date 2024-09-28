import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json();
  console.log(c);
  console.log(c.req.header());
  console.log(c.req.method);
  console.log(c.req.path);
  console.log(c.req.url);
  
  return c.text('Hello Hono!');
})

export default app
