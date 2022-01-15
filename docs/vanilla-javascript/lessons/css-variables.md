## CSS Variables

The `var()` function is used to insert the value of a CSS variable.

CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

A good way to use CSS variables is when it comes to the colors of your design. Instead of copy and paste the same colors over and over again, you can place them in variables.

```css
:root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}

.hl {
  color: var(--base);
}
```

### Practice

For our excercises, we are going to manipulate the CSS variables using javascript.

Do the following:

1. Open the HTML page with the live server

```
2. Vanilla Javascript/03 - Dev Tools Domination/index-START.html
```

2. Copy the above css snippet in the html document in the style element.

3. Select all the html input fields. Use the [querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

4. Write a handleUpdate function that sets the adjusts the root css variables. Use the following [method](https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty):

```js
document.documentElement.style.setProperty();
```

5. Loop over all the elements and attach an event listener on change and on mousemove that calls the handleUpdate function
