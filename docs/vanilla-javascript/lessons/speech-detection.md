## 12 - Speech Detection

When writing code for the Web, there are a large number of Web APIs available. These are APIs that are not part of javascript but part of the runtime environment (like a browser or node). We can leverage this to create all kinds of cool functionality for our apps.

Here are the APIs for the [browser](https://developer.mozilla.org/en-US/docs/Web/API)

### Practice

Look at the following file:

```
2. Vanilla Javascript/12 - Speech Detection/index-START.html
```

1. Access the speechRecognition object on the window and instantiate a new speechRecognition object.

2. Set the interimResults to true

3. Set the language of the speech recognition to something of you choice. Look at the documentation for the supported values.

4. Select the `.words` div. Create a new `p` tag and append it to words using javascript.

5. Attach an event listener to the recognition object that you created in step 1 that listens for results coming in.

6. Map over the results and put it all together in one string.

7. Replace a word or words of your choosing with an emoticon and set the content of the `p` tag you created in step 4 equal to the string you created.

8. Add an extra if check to check if the results that are coming in are final. If so, create a new `p` tag and append new textContent there.

9. Start the recognition by pasting the following code at the end of the script tag:

```js
recognition.addEventListener("end", recognition.start);
recognition.start();
```

Here is the detailed documentation of the `SpeechRecognition API`:

- [Speech Recognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
