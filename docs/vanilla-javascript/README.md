### What is HTML?

__HTML stands for Hyper Text Markup Language.__

So you can think of HTML as the language used for creating detailed instructions concerning style, type, format, structure and the makeup of a web page before it gets printed (shown to you).

HTML helps you structure your page into elements such as paragraphs, sections, headings, navigation bars, and so on.  

To illustrate what a page looks like, let's create a basic HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="./styles.css">
  <title>Document</title>
</head>
<body>
  <h1>This is a first level heading in HTML. With CSS, I will turn this into red color</h1>
  <h2>This is a second level heading in HTML. With CSS, I will turn this into blue color</h2>
  <h3>This is a third level heading in HTML. With CSS, I will turn this into green color</h3>
  <p>This is a <em>paragragh</em> As you can see, I placed an empahisis on the word "paragraph". Now, I will change also
    the background color of the word "paragraph" to black, and its text color  to green, all with just CSS.</p>
  <p>The main essence of this tutorial is to:</p>
    <ul>
       <li>Show you how to format a web document with HTML</li>
       <li>Show you how to design a web page with CSS</li>
       <li>Show you how to program a web document with JavaScript</li>
    </ul>

  <p>Next, I am going to add the following two numbers and display the result, all with JavaScript<p/>
    <p>First number:<span id= "firstNum">2</span> <br></p>
    <p>Second number: <span id= "secondNum">7</span> </p>
    <p>Therefore, the sum of the two of those numbers is: <span id= "answer">(placeholder for the answer)</span></p>
    <input type="button" id="sumButton" value="Click to add!">
</body>
</html>
```

#### Attributes
You can also add attributes to these elements which you can use to identify the elements and access them from other places in the site.

In our example, we set the id attributes to all of the three span elements. This will help us access them from our JavaScript as you will see later.

Think of this attribute the same way as your social media username. With this name, others can find you on social media. And someone can also refer to you or mention you with this name (you can get tagged in a post, and so on).

### What is CSS?

While HTML is a markup language used to format/structure a web page, CSS is a __design language__ that you use to make your web page look nice and presentable.

CSS stands for __Cascading Style Sheets__, and you use it to improve the appearance of a web page. By adding thoughtful CSS styles, you make your page more attractive and pleasant for the end user to view and use.

Imagine if human beings were just made to have skeletons and bare bones – how would that look? Not nice if you ask me. So CSS is like our skin, hair, and general physical appearance.

You can also use CSS to layout elements by positioning them in specified areas of your page.

#### Selectors
To access these elements, you have to “select” them. You can select a single or multiple web elements and specify how you want them to look or be positioned.

The rules that govern this process are called CSS selectors.

With CSS you can set the colour and background of your elements, as well as the typeface, margins, spacing, padding and so much more.

To illustrate how CSS works, I will be sharing the code which sets the background-color of the three levels of headers to red, blue, and green respectively:

```css
h1 {
  background-color: #ff0000;
}

h2 {
  background-color: #0000FF;
}

h3 {
  background-color: #00FF00;
}

em {
  background-color: #000000;
  color: #ffffff;
}
```

### What is JavaScript?

Now, if HTML is the markup language and CSS is the design language, then JavaScript is the __programming language__.

If you don’t know what programming is, think of certain actions you take in your daily life:

You can program actions, conditions, calculations, network requests, concurrent tasks and many other kinds of instructions.

#### DOM
*Read more about the DOM [here](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).*

You can access any elements through the Document Object Model API (DOM) and make them change however you want them to.

The DOM is a tree-like representation of the web page that gets loaded into the browser.

Thanks to the DOM, we can use methods like getElementById() to access elements from our web page.

JavaScript allows you to make your webpage “think and act”, which is what programming is all about.

This code illustrates how you can do calculations with JavaScript:

```js
function displaySum() {
  let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` ;
}
document.getElementById('sumButton').addEventListener("click", displaySum);
```

**Remember what I told you about HTML attributes and their uses? This code displays just that.**

The displaySum is a function which gets both items from the web page, converts them to numbers (with the Number method), sums them up, and passes them in as inner values to another element.

The reason we were able to access these elements in our JavaScript was because we had set unique attributes on them, to help us identify them.

So thanks to this:

```html
// id attribute has been set in all three

<span id= "firstNum">2</span> <br> 
    ...<span id= "secondNum">7</span> 
    ...... <span id= "answer">(placeholder for the answer)</span>
```

We were able to do this:

```js
//getElementById will get all HTML elements by a specific "id" attribute
...
let firstNum = Number(document.getElementById('firstNum').innerHTML)
  let secondNum = Number(document.getElementById('secondNum').innerHTML)

  let total = firstNum + secondNum;
  document.getElementById("answer").innerHTML = ` ${firstNum} + ${secondNum}, equals to ${total}` 
```

### What are the dev tools?
*Lets practice a bit! See [Dev Tools Domination](/vanilla-javascript/lessons/dev-tools-domination.md)*

The docs [here](https://developer.chrome.com/docs/devtools/overview/) are great, so I'm not gonna paste it here. I still want to go through the developer tools so you now how to get the most out of them. Let us jump into the browser.

> Before we get going, install the [HTML Preview](https://marketplace.visualstudio.com/items?itemName=negokaz.live-server-preview) plugin for vs code.

Let's get started!

- [Array Cardio 1](/vanilla-javascript/lessons/array-cardio1.md)
- [Array Cardio 2](/vanilla-javascript/lessons/array-cardio2.md)
- [CSS Variables](/vanilla-javascript/lessons/css-variables.md)
- [Referencing vs Copy](/vanilla-javascript/lessons/reference-vs-copy.md)
- [LocalStorage](/vanilla-javascript/lessons/localstorage.md)
- [Sort Without Articles](/vanilla-javascript/lessons/sort-without-articles.md)
- [Adding up times with reduce](/vanilla-javascript/lessons/adding-times.md)
- [Key sequence detection](/vanilla-javascript/lessons/key-sequence-detection.md)
- [Speech Detection](/vanilla-javascript/lessons/speech-detection.md)
- [Events](/vanilla-javascript/lessons/events.md)
- [Shift and Checkboxes](/vanilla-javascript/lessons/checkboxes.md)
- [Slide on Scroll](/vanilla-javascript/lessons/slide-on-scroll.md)
