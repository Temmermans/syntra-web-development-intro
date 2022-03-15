[Netlify](https://www.netlify.com/) is one of the most popular services out there for web deployment. It easily imports projects from GitHub, GitLab, and Bitbucket, and is widely used with [Jamstack](https://blog.logrocket.com/why-you-should-be-using-jamstack/) applications. One cool feature is that it creates a random name for every project — and the names are quite catchy.

To get started, create a Netlify account if you haven’t already.

## Deploying using Netlify drag-and-drop

One of the coolest features that Netlify offers is the ability to drag and drop your site folder on the Netlify dashboard and have it deploy your app like magic.

For your React app, you’ll have to drag and drop the `build` folder onto the Netlify Dashboard. Run `npm run build` beforehand to deploy the latest build.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/netlify-drag-drop-deploy.gif)

## Automatic deployments

You can also connect GitHub, GitLab, or Bitbucket, depending on where your project is stored. This allows automatic deployment whenever you push your changes.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/create-new-site-netlify.png)

Choose the project repository that you want to deploy.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/choose-project-deploy-netlify.png)

Once you’ve selected the project, the final step is the configuration, which Netlify will autodetect if the project is initialized with Create React App.

![](https://blog.logrocket.com/wp-content/uploads/2020/08/configurations-settings-netlify.png)

Click Deploy site and your app will be deployed!
