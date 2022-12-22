## Wordle

What is wordle?

- There is a secret five letter word chosen
- Players have six guesses to figure out the secret word. After six guesses, they lose
- If the player guesses a letter that is in the right place, it is shown as green
- If the player guesses a letter that is in the word but not in the right place, it is shown as yellow
- It does account for however many of the letter exist in the word. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not.
- If the player guesses the right word, the player wins and the game is over.

### The API

You have two APIs to work with today:

> [!NOTE]
> GET https://words.dev-apis.com/word-of-the-day

- This will give you the word of the day. It changes every night at midnight
- The response will look like this: `{"word":"humph","puzzleNumber":3}` where the word is the current word of the day and the puzzleNumber is which puzzle of the day it is
- If you add random=1 to the end of your URL (words.dev-apis.com/wordof-the-day/get-word-of-the-day?random=1) then it will give you a random word of the day, not just the same daily one.
- If you add puzzle=<number> to the end of your URL (words.dev-apis.com/wordof-the-day/get-word-of-the-day?puzzle=1337) then it will give you the same word every time.

> [!NOTE]
> POST https://words.dev-apis.com/validate-word

- You must POST to this endpoint, not GET.
- The endpoint expects JSON with a property called "word". A valid post body would be `{ "word": "crane" }`.
- The API will return back to you the word you sent and validWord which will be true or false. e.g. `{ "word": "crane", "validWord": true }` or `{ "word": "asdfg", "validWord": false }`.
- This endpoint only validates five letter words.
- This endpoint only validates English words and will not validate any accents or non-letter characters
  Do this part last. It's the hardest part to get right.

### Tips and tricks

- Solve one problem at the time. Just make a user able to guess six times. Then add detection for correct guesses. Then add highlighting in green correct letters. Then add gray for definitely wrong letters. Then do yellow for close.
- I didn't show you all the JavaScript methods you're going to need to do this. You will need to Google things. Learning how to answer your own questions is perhaps the most useful you'll learn in this course.
- I added some animations, you don't have to. It was just for fun.
