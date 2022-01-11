## Express Middleware

Middleware are functions that execute before the controllers.

- Allow you to execute functions on an incoming request with guaranteed order.
- Great for authenticating, transforming the request, tracking, error handling.
- Middleware can also respond to request like a controller would, but that is not their intent.

Controllers are also middleware, with the intent of returning data:

- Controllers handle what a Route + Verb combo can access from the DB
- Think of them as the final middleware in the stack for a request. Their is no intent to proceed to another middleware function after a controller
- Controllers implement the logic that interacts with our DB models
- Can generalize controllers to work for many models because we're going with a REST approach which requires CRUD actions on resources

The middleware is a function that takes parameters of (req, res, next).

    The req is the sent request (GET, POST, DELETE, PUT, etc.).
    The res is the response that can be sent back to the user in a multitude of ways (res.sendStatus(200), res.json(), etc.).
    The next is a function that can be called to move the execution past the piece of middleware and into the actual app.get server response.
