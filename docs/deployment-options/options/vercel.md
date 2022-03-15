[Vercel](https://vercel.com/docs) is a revolutionary serverless deployment service designed for React, Angular, Vue, and other JavaScript libraries. You can easily import projects from GitLab or Bitbucket with Vercel. Automatic SSL is one of the many cool features it offers.

To deploy Vercel, create a new account. You can quickly login using OAuth.

After a successful login, the dashboard screen will appear. You can use either this dashboard or the Vercel CLI and deploy it from the terminal; we’ll discuss both methods in more detail.

## Deploying using the dashboard

To deploy using the Vercel dashboard, integrate GitHub, GitLab, or Bitbucket — wherever your React application is stored. Click Import Project on your panel.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/vercel-dashboard.png)

Click Continue under From Git Repository.

Click Import Project from GitHub. If this is your first time using Vercel, you’ll see a screen like this:

![](https://blog.logrocket.com/wp-content/uploads/2020/08/import-project-github.png)

This next step is important. If you’ve initialized your React project using Create React App, Vercel will autodetect it and choose a suitable configuration on its own. Leave the default configuration and click Deploy. We leave the configuration on the default setting so that Vercel knows the correct way to deploy the website based on the configuration.
