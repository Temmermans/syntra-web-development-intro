## Express Middleware

Middleware are functions that execute before the controllers.

- Allow you to execute functions on an incoming request with guaranteed order.
- Great for authenticating, transforming the request, tracking, error handling.
- Middleware can also respond to request like a controller would, but that is not their intent.
