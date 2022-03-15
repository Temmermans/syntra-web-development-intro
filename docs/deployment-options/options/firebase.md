[Firebase](https://firebase.google.com/) is an entire platform that you can use to develop and scale your application. Along with hosting, it offers myriad other services, including authentication, Cloud Firestore, Cloud Functions, and more.

If you haven’t already, create an account on Firebase and then create a new project. Then click Hosting on the sidebar, and click Get Started. This should initiate Firebase hosting for us.

Install the Firebase CLI globally to make it easier to use in different projects.

```bash
npm install -g firebase-tools
```

Login with your Firebase or Google account.

```bash
firebase login
```

Next, go to your project root directory and run the following command to initialize a Firebase project.

```bash
firebase init
```

You’ll be asked to confirm; reply Yes.

```bash
 ? Are you ready to proceed? Yes
```

Choose the hosting option by clicking Space on Hosting, and then hit Enter.

```bash
? Which Firebase CLI features do you want to setup for this folder? Press Space to select features, then Enter to confirm your choices.
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◯ Functions: Configure and deploy Cloud Functions
❯◯ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
```

Since you already created a project in the first step, choose Use an existing project when asked to choose the Firebase project associated with your application. Otherwise, you can select Create a new project.

```bash
=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add,
but for now we'll just set up a default project.

? Please select an option: (Use arrow keys)
> Use an existing project
  Create a new project
  Add Firebase to an existing Google Cloud Platform project
  Don't set up a default project
```

Lastly, change the default public folder to build for your Create React App project. If you haven’t initialized the project with Create React App, choose the appropriate build folder.

```bash
=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

? What do you want to use as your public directory? build
? Configure as a single-page app (rewrite all urls to /index.html)? Yes
? File public/index.html already exists. Overwrite? No
```

Before proceeding to the next step, build your React project.

```bash
 npm run build
```

The next and final step is to deploy the project. Run the following command.

```bash
firebase deploy
```

Once the process completes, you’ll see the deployed links in the terminal.

```bash
+  Deploy complete!

Project Console: https://console.firebase.google.com/project/react-project/overview
Hosting URL: https://react-project.web.app
```
