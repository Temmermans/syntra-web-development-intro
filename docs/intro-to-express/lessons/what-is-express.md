## What is express?

A very popular and easy to use framework for nodejs to build APIs.

-Handles all the tedious tasks like managing sockets, route matching, error handling, and more
-Open source
-Has a huge community and support from anything that has to do with APIs in Node.js
-Really simple to use

All it takes to start a basic server is the following code:

```js
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
```

## Express and REST

Express was designed with REST in mind and has everything you would need to build an HTTP API.

- Express has a robust route matching system that allows for exact, regex, glob, and parameter matching
- It also supports HTTP verbs on a route based level. Together with the routing, you can create REST APIs
- Routes match in the order that they were defined (top to bottom)
- For abstraction, Express allows you to create sub routers that combine to make a full router
- Middleware can be added to any and all routes with many different configurations
