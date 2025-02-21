# Wheeler Knight - Personal Portfolio

## Overview

A modern, interactive portfolio website showcasing Wheeler Knight's professional journey and technical expertise.

Built with:

- React.js for UI components
- Tailwind CSS for styling
- GSAP for animations
- React Router for navigation
- Vite for build tooling

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
- [Credits](#credits)
- [To-Do](#to-do)
- [Component Documentation](#component-documentation)
- [Key Features](#key-features)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)

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

This project was built with large influence from the JavaScript Mastery Tutorial on YouTube

- "Build and Deploy an Awwwards Winning Website | React.js, Tailwind CSS, GSAP"

This Website, and the aformentioned tutorial template, is inspired from Zentry

```
Zentry.com
```

## To-Do

- Fix Hard Data
- Adjust Links
- Add Personal Assets
- Change Theme
- Change Layout
- Add Contact Form
- Add Pages

## Component Documentation

### Navigation

The site uses React Router for navigation between different sections:

- `/`: Home page with Hero section
- `/about`: About me page
- `/projects`: Portfolio projects
- `/skills`: Technical skills
- `/experience`: Work experience
- `/contact`: Contact form
- `/resume`: Downloadable resume
- `/goals`: Professional goals

### Key Features

- Responsive design
- Interactive video transitions
- Background music toggle
- GSAP animations
- Custom UI components

## Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
git clone [repository-url]
cd wheelerknight.com
npm install
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory:

```
VITE_CONTACT_EMAIL=your@email.com
```

### Adding New Components

Place new components in `src/components/` following the existing pattern:

```
ComponentName/
├── index.jsx
├── styles.css (if needed)
└── utils.js (if needed)
```

## Deployment

The site is deployed on [platform] and can be accessed at wheelerknight.com

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request
