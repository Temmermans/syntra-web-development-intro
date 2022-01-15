## Localstorage

In the beginning, the web used HTTP protocols to send messages (btw, SSL is more secure, you should use HTTPS instead of HTTP). These protocols are stateless protocols. In a stateless protocol, each request doesn't store any states, or "persisting information"; each request is its own island and it doesn't have idea about the other requests.

Having a stateless protocol optimizes performance, but it also comes with a problem: what if you need to remember a user session? If you have darkMode: true or user_uuid: 12345abc, how can a server remember that if you're using a stateless protocol? With Cookies!

```
Set-Cookie: choco_chip_cookie=its_delicious
```

More modern technologies are localstorage and sessionstorage. Local Storage and Session Storage are more similar than different. Most modern browsers should support Local Storage and Session Storage features. They are used to store data in the browser. They are accessible from the client-side only (web servers can't access them directly). Also since they are a front-end tool, they have no SSL support.

| Cookies                                                                               | Local Storage                                 | Session Storage                               |
| ------------------------------------------------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| Has different expiration dates (both the server or client can set up expiration date) | Has no expiration date                        | Data is gone when you close the browser tab   |
| The Client can't access the Cookies if the HttpOnly flag is true                      | Client only                                   | Client only                                   |
| Data are transferred on each HTTP request                                             | Data are not transferred on each HTTP request | Data are not transferred on each HTTP request |
| 4kb limit                                                                             | 10 mb limit                                   | 10 mb limit                                   |

### Practice

For our excercises, we are going to work with localstorage using javascript.

Do the following:

1. Open the HTML page with the live server

```
2. Vanilla Javascript/06 - LocalStorage/index-START.html
```

2. Select the `.add-items` and `.plates` html elements. Use the [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

3. Get the items from [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), parse the string. If nothing is found, make it default to an empty array. Store it in an items variable.

4. Copy the following function and paste it in the script tag. What does it do?

```js
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? "checked" : ""} />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
}
```

4. Write a addItem function that selects the value from the input field, creates a new object with a text property, push the new item in the items array, uses the populateList function above to update the DOM and store the new items in localStorage.

5. (bonus) Write a function toggleDone that checks the checkbox, populates the DOM with the function above and stores it in localStorage.

6. attach the necessary eventListeners (on form submit and on button click) with the toggleDone and addItem functions as callbacks.
