# Wheeler Knight - Personal Portfolio

## Overview

This is the personal portfolio website of Wheeler Knight, showcasing skills, experience, projects, and more. The website is built using React.js, Tailwind CSS, and GSAP for animations.

## Table of Contents

- [Overview](#overview)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [License](#license)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/wheelerknight.com.git
cd wheelerknight.com
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
wheelerknight.com/
├── public/                 # Public assets
│   ├── fonts/              # Custom fonts
│   ├── img/                # Images
│   ├── videos/             # Videos
│   └── index.html          # Main HTML file
├── src/                    # Source files
│   ├── components/         # React components
│   │   ├── About.jsx       # About component
│   │   ├── AnimatedTitle.jsx # AnimatedTitle component
│   │   ├── Button.jsx      # Button component
│   │   ├── Hero.jsx        # Hero component
│   │   └── RoundedCorners.jsx # RoundedCorners component
│   ├── App.jsx             # Main App component
│   ├── index.css           # Global CSS
│   └── main.jsx            # Entry point
├── .gitignore              # Git ignore file
├── .prettierrc.js          # Prettier configuration
├── eslint.config.js        # ESLint configuration
├── index.html              # Main HTML file
├── package.json            # NPM package configuration
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── vite.config.js          # Vite configuration
```

## Components

### Hero

The `Hero` component displays the main hero section with a video background and a call-to-action button.

### Button

The `Button` component is a reusable button with customizable icons and styles.

### About

The `About` component provides information about Wheeler Knight, including skills, experience, and projects.

### AnimatedTitle

The `AnimatedTitle` component displays animated titles.

### RoundedCorners

The `RoundedCorners` component provides SVG filters for rounded corners.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run lint:fix`: Runs ESLint and automatically fixes issues.
- `npm run format`: Formats the code using Prettier.

## Dependencies

- `react`: JavaScript library for building user interfaces.
- `react-dom`: Entry point to the DOM and server renderers for React.
- `react-icons`: Popular icons as React components.
- `gsap`: JavaScript library for creating animations.
- `@gsap/react`: GSAP plugin for React.
- `clsx`: Utility for constructing `className` strings conditionally.
- `prop-types`: Runtime type checking for React props.

## License

This project is licensed under the MIT License.

## Credits

This project was built wit large influence from the JavaScript Mastery Tutorial on YouTube
 - "Build and Deploy an Awwwards Winning Website | React.js, Tailwind CSS, GSAP"
