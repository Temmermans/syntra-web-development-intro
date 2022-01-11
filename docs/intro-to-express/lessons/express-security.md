## Express Security

> Authentication is controlling if an incoming request can proceed or not
> Authorization is controlling if an authenticated request has the correct permissions to access a resource
> Identification is determining who the requester is
> Your API will never be entirely safe, but make it hard for them

Some guidelines for a secure API:

### Use TLS

If your app deals with or transmits sensitive data, use Transport Layer Security (TLS) to secure the connection and the data. This technology encrypts data before it is sent from the client to the server, thus preventing some common (and easy) hacks. Although Ajax and POST requests might not be visibly obvious and seem “hidden” in browsers, their network traffic is vulnerable to packet sniffing and man-in-the-middle attacks.

You may be familiar with Secure Socket Layer (SSL) encryption. TLS is simply the next progression of SSL. In other words, if you were using SSL before, consider upgrading to TLS. In general, we recommend Nginx to handle TLS. For a good reference to configure TLS on Nginx (and other servers), see Recommended Server Configurations (Mozilla Wiki).

Also, a handy tool to get a free TLS certificate is Let’s Encrypt, a free, automated, and open certificate authority (CA) provided by the Internet Security Research Group (ISRG).

### Use Helmet

Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.

Helmet is actually just a collection of smaller middleware functions that set security-related HTTP response headers:

- csp sets the `Content-Security-Policy` header to help prevent cross-site scripting attacks and other cross-site injections.
- hidePoweredBy removes the `X-Powered-By` header. --> This should be disbaled **_at a minimum_**
- hsts sets `Strict-Transport-Security` header that enforces secure (HTTP over SSL/TLS) connections to the server.
- ieNoOpen sets `X-Download-Options` for IE8+.
- noCache sets `Cache-Control` and Pragma headers to disable client-side caching.
- noSniff sets `X-Content-Type-Options` to prevent browsers from MIME-sniffing a response away from the declared content-type.
- frameguard sets the `X-Frame-Options header` to provide clickjacking protection.
- xssFilter sets `X-XSS-Protection` to disable the buggy Cross-site scripting (XSS) filter in web browsers.

Install Helmet like any other module:

```s
$ npm install --save helmet
```

Then to use it in your code:

```javascript
// ...

var helmet = require("helmet");
app.use(helmet());

// ...
```

### Prevent brute-force attacks against authorization

Make sure login endpoints are protected to make private data more secure.

A simple and powerful technique is to block authorization attempts using two metrics:

- The first is number of consecutive failed attempts by the same user name and IP address.
- The second is number of failed attempts from an IP address over some long period of time. For example, block an IP address if it makes 100 failed attempts in one day.

Look at the packages

### JWT authentication

tldr; tokens passed every request to check auth on the server

- A bearer token strategy that allows the API to be stateless with user auth.
- Created by a combination of secrets on the API and a payload like a user object
- Must be sent with every request where the API will then try to verify the token was created with the expected secrets
- After successful verification, JWT payload is accessible to the server. Can be used to authorization and identification

![JWT](../../static/jwt.jpeg)
