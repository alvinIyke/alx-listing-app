# alx-listing-app
The ALX Listing App project aims to scaffold and lay the foundational structure for a modern Airbnb clone. This initial milestone focuses on setting up a well-organized and scalable codebase using Next.js, TypeScript, TailwindCSS, and ESLint. By establishing a clean folder structure, reusable components, and adhering to best practices, the project ensures a solid starting point for building a dynamic, responsive, and user-friendly property listing page.
## Goals
+ Gain hands-on experience scaffolding a Next.js project tailored for production readiness.
+ Implement TypeScript for type safety and reusable interfaces to enhance code maintainability and robustness.
+ Configure TailwindCSS for building responsive, accessible, and visually appealing UI components.
+ Structure a Next.js project following industry-standard best practices, ensuring scalability and readability.
+ Create foundational reusable components and organize assets effectively for real-world applications.
## Folder structure
Created the following components and directories to establish the project foundation:
+ components/common/Card.tsx: This file will define a reusable Card component that will be used across the project to display information about various properties.
+ components/common/Button.tsx: This file will define a reusable Button component, which will be used for actions like “Book Now,” “Details,” etc.
+ interfaces/index.ts: Defines all TypeScript interfaces related to the project. Start by creating placeholder interfaces for CardProps and ButtonProps.
+ constants/index.ts: Set up constants to store any reusable data or strings such as API URLs, configuration settings, or UI text
+ public/assests folder: Created a public/assets folder and placed the necessary images and SVG files that will be used across the project (such as placeholder property images).
And lastly, ensure assets are organized for easy access.
## Instructions on How to Run the Project
### Creating the Next.js App:
Scaffold a new Next.js application named alx-listing-app with the following options:
+ Enable TypeScript to enforce type safety across the project.
+ Enable ESLint for linting and maintaining clean, readable code.
+ Install TailwindCSS for styling and building responsive UIs.
+ Disable the AppRouter (use the Pages Router instead).
+ Do not create a src directory (place files directly under the project root).
+ Do not customize the default import alias
## npx create-next-app@latest alx-listing-app --typescript --tailwind --eslint --no-app-router --no-src-dir
### Confirm and Configure Tailwind CSS:
Confirm the content of your tailwind.config.js:
module.exports = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
In styles/globals.css, import Tailwind’s base, components, and utilities only, all other content should be removed
@tailwind base;
@tailwind components;
@tailwind utilities;
### Create the required folder structure
Once all the files are created, run the project locally using the following command:
## npm run dev
Then open the project in your browser at http://localhost:3000 to ensure the Next.js app is running without errors.


