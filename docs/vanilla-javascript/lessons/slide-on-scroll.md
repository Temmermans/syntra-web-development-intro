## 13 - Slide in on Scroll

For this excercise, we will introduce a new topic. Namely debouncing.

Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.

Practical uses are also when implementing a search and you have to do a lot of calls to a backend somewhere.

### Practice

Look at the following file:

```
2. Vanilla Javascript/13 - Slide in on Scroll/index-START.html
```

1. Copy the following debounce function in your script tag. Look at it carefully, do you understand what it does?

```js
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
```

2. Grab all the `.slide-in` elements.

3. Create a function checkSlide that loops through all the slides. If the image is half shown and we did not scroll past it, add the class active to the sliderImage. Else, remove the class.

   > Hint: You will have to calculate the [dimensions](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)

4. Attach an event listener to the window on scroll. The function that should be attached is the debounced checkSlide function. Try it without the debounce too, what do you notice?
