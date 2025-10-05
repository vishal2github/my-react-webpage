# PROJECT GUIDE

☕ Hello and welcome in this project of deploying a simple static webpage using **ReactJS** and **GitHub Pages**.

<br>

### Prerequisites
  - **Node.js** and **npm** installed on your machine.
  - A **GitHub account** and a **repository** created to host the page.

<br>

### Step 1: Create a React App
1. Open a terminal (Anyone preferred).
2. Create a React app using ```create-react-app```. This will set up all the necessary React boilerplate.
3. Run the command ```npx create-react-app my-static-site```. Replace **my-static-site** with custom name of your project.
4. Navigate into your project folder using ```cd my-static-site```.
5. Start the development server using ```npm start```, to make sure everything is set up properly. This will run your app locally on http://localhost:3000. Open the URL in browser and check that the app is working.

<br>

### Step 2: Install ```gh-pages``` package _(GitHub Pages needs the gh-pages package to help deploy the app easily)_
1. Install gh-pages by running the command ```npm install gh-pages --save-dev``` in the root of your React app.

<br>

### Step 3: Update package.json
1. Next step takes, to update the package.json file to configure GitHub Pages for deployment.
2. Open the package.json file in project and locate the **name** field. Add a **homepage** field just below it with the URL of your GitHub Pages site:

```
  "name": "my-static-site",
  "homepage": "https://<your-username>.github.io/my-static-site"
```

```
  NOTE: Replace <your-username> with your GitHub username and my-static-site with the custom name of your repository.
```

3. Add deployment and pre-deployment scripts under the **scripts** section:

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
```

```
Scripts working
  predeploy: Runs before deploying and creates a production build of the React app.
  deploy: Deploys the build folder to GitHub Pages using the gh-pages package.
```

<br>

### Step 4: Create a GitHub Repository _(You need a GitHub repository to push your code and host your webpage)_
1. Go to GitHub and login.
2. On your GitHub home page, click on the + sign in the top-right corner, then select New Repository.
3. Name your repository the same as the **homepage** value you added to the package.json (e.g., my-static-site).
4. Create the repository.

<br>

### Step 5: Initialize Git and Push code to GitHub
1. Open the terminal and initialize Git inside your React project using ```git init```.
2. Add the GitHub repository you just created as the remote repository:

```
  git remote add origin https://github.com/<your-username>/my-static-site.git
```

```
  NOTE: Replace <your-username> with your GitHub username and my-static-site with the name of your repository.
```
3. Add, commit, and push your files:

```
  git add .
  git commit -m "Initial commit"
  git push -u origin main
```

<br>

### Step 6: Deploy your React App
1. Now, everything is set up for deployment. You can deploy your app to GitHub Pages by running ```npm run deploy```.
  - This will automatically create a build folder and push it to a special branch called gh-pages in your repository.

<br>

### Step 7: Access your website
1. Once the deployment is done, GitHub will host your static website.
2. You can access it at the URL you defined in the homepage field earlier, which should look something like:

```
  https://<your-username>.github.io/my-static-site
```

<br>

### Troubleshooting
  - **Site doesn't load after deployment**
    - If the page doesn't show up, wait a few minutes. GitHub Pages may take some time to update.

  - **404 error**
    - Double-check your repository name and make sure that the **homepage** field in **package.json** is correctly set.

  - **Build issues**
    - If you encounter issues during the build process, try running npm run build locally to debug.

<br>

### Custom Domain (OPTIONAL)
- If you want to use your custom domain instead of the default GitHub Pages URL, you can set that up by adding a CNAME file to your repository.
  - Create a new file in your public/ directory called CNAME.
  - In the CNAME file, put your custom domain (e.g., www.yourdomain.com).
  - Push the changes to GitHub.

<br>

### 🔺 END OF THE PROJECT GUIDE 🔺