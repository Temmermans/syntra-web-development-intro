Heroku is a cloud application platform that has attracted a large number of developers since its launch in 2007. One reason for this is that it supports most programming languages, including the likes of Go, Node.js, Clojure, and more.

Start by creating a free account on Heroku.

## CLI

Install heroku-cli globally by running the following command.

```
npm install -g heroku
```

Log into heroku-cli.

```
heroku login
```

We’ll use Heroku Buildpack for Create React App for quick deployment. Below is all the code you’ll need; you can copy/paste and deploy in one step!

```bash
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "react-create-app on Heroku"
git push heroku master
heroku open
```

## Dashboard

You can also deploy with Heroku via their dashboard. To start, make sure your project is stored in a GitHub repository.

Go to your Heroku dashboard, click New, and then click Create new app.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/heroku-dashboard-create-new-app.png)

You’ll be prompted to give your project a name. Type your application name and click Create app.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/name-app-heroku.png)

After creating an app, sync your GitHub repository. You’ll see something like this on your app dashboard.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/heroku-deployment-method.png)

Once you’ve successfully connected your GitHub to Heroku, you can search for the project repository and deploy it.

Select your project from the list of repositories.

You’ll have two choices: manual or automatic deploy, which means that whenever you push your changes to GitHub, Heroku will automatically deploy the new website for you. For the purpose of this tutorial, we’ll go with manual deploy.

Click Deploy Branch under Manual Deploy and your application will deploy once the build process completes.
