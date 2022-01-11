## Express Authentication

    Authentication is controlling if an incoming request can proceed or not
    Authorization is controlling if an authenticated request has the correct permissions to access a resource
    Identification is determining who the requester is
    Your API will never be entirely safe, but make it hard for them

## JWT authentication

tldr; tokens passed every request to check auth on the server

    A bearer token strategy that allows the API to be stateless with user auth.
    Created by a combination of secrets on the API and a payload like a user object
    Must be sent with every request where the API will then try to verify the token was created with the expected secrets
    After successful verification, JWT payload is accessible to the server. Can be used to authorization and identification
