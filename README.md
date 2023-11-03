# MealBros React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## About

This project is a React-based web application named MealBros, aiming to provide users with a platform to discover and organize their favorite recipes. Users can search for recipes, explore different cuisines, and save their preferred recipes for future reference.

## Target Users

The target users for MealBros include cooking enthusiasts, beginners looking for easy-to-follow recipes, and anyone interested in discovering new and exciting dishes.

## Data Sources

The application fetches recipe data from [TheMealDB API](https://www.themealdb.com/api.php).

## Project Repositories

- [MealBros React App](https://github.com/MQ3120-2023 group-project-wednesday-1pm-web-undevelopers)

## Implemented Features (MVP)

The current MVP includes the following features:

- Recipe search by ingredient
- Recipe search by name
- Implementaion of Favourites unique for each user
- Pagination of search results
- User authentication through a basic login system
- Using Google to Login

## Project Source Code Guide

- The main application code is located in the `src` folder.
- Components, such as `Login`, `IngredientSearch`, etc., are in the `src/components` and `src/functions` directory.
- Styling files, such as `LoginPage.css` and `RecipeDetails.css`, are in the `src/styling` directory.
- App routing is configured in the `App.js` file.

## Next Steps

If the project were to continue, the following steps could be considered:

- Expanding the recipe details and allowing users to add their recipes.
- Enhancing the overall user interface and experience.
- Expanding the scope of the app to make it a social media platform for cooking enthusists

## Team Roles and Contributions

- **Aaron:**

  - Developed the recipe details page, providing users with comprehensive information.
  - Implemented the ability to mark recipes as favorites, enhancing user customization.
  - Established functionality for adding and removing favorites, utilizing Firebase for seamless storage.
  - Spearheaded the design and implementation of the login page, ensuring a secure authentication process.
  - Orchestrated the deployment process, ensuring a smooth and reliable user experience.

- **Timothy:**

  - Initiated the project by implementing fundamental functionality and essential components such as search and pagenation.
  - Successfully integrated and configured the API, ensuring seamless communication with external data sources.
  - Accomplished the setup and functionality of the initial recipe and ingredient search, establishing a solid foundation for the application.
  - Assumed a leadership role in presenting progress during weekly sprints, providing clarity on project status and goals.
  - Contributed significantly to the README.md file, documenting project details and achievements for clear communication and reference.

- **Aroosh:**

  - Led the design efforts, ensuring an aesthetically pleasing and user-friendly interface, as well as implemnting the logo and Favicon to the site.
  - Played a pivotal role in the planning phase, contributing insightful ideas for the application's structure and features.
  - Provided guidance on feature implementation, translating conceptual design into tangible functionalities.
  - Collaborated effectively with the team, offering strategic input on the development process.
  - Provided moral support to the team, fostering a positive and collaborative work environment.

- **Amora:**
  - Site responsiveness
  - Authenitication
  - Project Board

## Communication and Interaction

### Communication Platform

The team utilized Discord as the primary communication platform for real-time discussions, updates, and quick decision-making. Discord provided various channels for different aspects of the project, including general discussions, coding help, and announcements. This platform allowed team members to stay connected throughout the development process and quickly address any questions or concerns.

### Weekly Sprint Meetings

The team conducted weekly sprint meetings to review progress, discuss milestones, and plan for the upcoming tasks. During these meetings, each team member provided updates on their individual contributions, shared any challenges faced, and received feedback from the rest of the team. The discussions focused on aligning tasks with the project's goals, ensuring that everyone had a clear understanding of their responsibilities.

### Project Board on GitHub

The team used a [project board on GitHub](https://github.com/orgs/MQ3120-2023/projects/42/views/2) to manage and organize tasks. This board provided a visual representation of the project's progress, allowing team members to track issues, monitor the status of tasks, and prioritize work efficiently. The project board also facilitated seamless collaboration by offering a centralized location for discussing and assigning tasks.

### Milestone Discussions

Milestones were established to mark significant achievements and progress points throughout the project. These milestones were discussed and agreed upon during sprint meetings, providing a structured approach to project development. The team used these milestones as a basis for evaluating the completion of specific features, ensuring that project goals were met within the established timeline.

### Issue Tracking

The team employed an issue tracking system, possibly using GitHub Issues or another similar tool, to log and address bugs, enhancements, and other tasks. This helped in maintaining a clear overview of outstanding work, assigning tasks to specific team members, and tracking the resolution of issues.

### Collaboration and Code Reviews

Collaboration occurred through regular code reviews where team members provided constructive feedback on each other's code. This process ensured code quality, adherence to coding standards, and knowledge sharing among team members. Code reviews were conducted via pull requests on the project's GitHub repository.

The combination of Discord for real-time communication, a project board for task management, and other collaborative tools facilitated effective teamwork and successful project development.

## Guide to the Project Source Code

### `src` Directory

#### `components`
- **`auth` Directory:**

  - **`auth.js`**: Handles authentication logic.
  - **`signin.js`**: Component for user sign-in.
  - **`signup.js`**: Component for user sign-up.

- **`Favorites.js`**: Manages and displays favorite recipes.
- **`Home.js`**: Main landing page of the application.
- **`IngredientSearch.js`**: Handles recipe search based on ingredients.
- **`LoginPage.js`**: Login page component.
- **`RecipeDetails.js`**: Displays detailed information about a specific recipe.
- **`RecipeList.js`**: Manages and displays a list of recipes.

#### `functions`

- **`favoriteFunctions.js`**: Functions related to handling favorites.
- **`getRecipe.js`**: Functions related to fetching recipe data.
- **`googleAuth.js`**: Google authentication functions.

#### `styling`

- **`CustomMultiSelect.css`**: Custom styling for multi-select component
- **`Favorites.css`**: Stylesheet for the Favorites component.
- **`LoginPage.css`**: Stylesheet for the LoginPage component.
- **`RecipeDetails.css`**: Stylesheet for the RecipeDetails component.
- **`RecipeList.css`**: Stylesheet for the RecipeList component.
- **`App.css`**: Main stylesheet for the entire application.

### Root Level

- **`App.js`**: The main entry point for the React application. Defines routes and renders main components.
- **`App.test.js`**: Test file for the main application.
- **`firebase.js`**: Firebase configuration file
- **`index.js`**: Entry point for rendering the React application.
- **`index.css`**: Stylesheet for the main `index.html`.