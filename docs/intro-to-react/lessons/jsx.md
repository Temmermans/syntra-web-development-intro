## JSX

So far we've been writing React without JSX, something that I don't know anyone that actually does with their apps. _Everyone_ uses JSX. I show you this way so what JSX is actually doing is demystified to you. It doesn't do hardly anything. It just makes your code a bit more readable.

If I write `React.createElement("h1", { id: "main-title" }, "My Website");`, what am I actually trying to have rendered out? `<h1 id="main-title">My Website</h1>`, right? What JSX tries to do is to shortcut this translation layer in your brain so you can just write what you mean. Let's convert Pet.js to using JSX. It will look like this:

```javascript
// delete the import
const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
};
export default Pet;
```

I don't know about you, but I find this far more readable. And if it feels uncomfortable to you to introduce HTML into your JavaScript, I invite you to give it a shot until the end of the workshop. By then it should feel a bit more comfortable. And you can always go back to the old way.

However, now you know _what_ JSX is doing for you. It's just translating those HTML tags into `React.createElement` calls. _That's it._ Really. No more magic here. JSX does nothing else. Many people who learn React don't learn this.

Notice the strange `{props.name}` syntax: this is how you output JavaScript expressions in JSX. An expression is anything that can be the right side of an assignment operator in JavaScript, e.g. `const x = <anything that can go here>`. If you take away the `{}` it will literally output `props.name` to the DOM.

> Notice we don't have to do `import React from 'react'` here like we used to. The latest version of JSX handles that for you so you only need to explicitly import the React package when you need to use something from it; otherwise feel free to do JSX without having to import React!
> Notice you still have to import React despite React not being explicitly used. Remember that JSX is compiled to `React.createElement` calls. Anywhere you use JSX, you need to import React.

So now JSX is demystified a bit, let's go convert App.js.

```javascript
import { render } from "react-dom";
import Pet from "./Pet";
const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Luna" animal="dog" breed="Havanese" />
      <Pet name="Pepper" animal="bird" breed="Cockatiel" />
      <Pet name="Doink" animal="cat" breed="Mix" />
    </div>
  );
};
render(<App />, document.getElementById("root"));
```

Notice we have Pet as a component. Notice that the `P` in `Pet` is capitalized. It _must_ be. If you make it lowercase, it will try to have `pet` as a web component and not a React component.

We now pass props down as we add attributes to an HTML tag. Pretty cool.
