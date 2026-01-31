import projectDisplay from "../assets/projectDisplays/quizMobile.png";
import laundaryDisplay from "../assets/projectDisplays/laundarySite.png";
import patternLibraryDisplay from "../assets/projectDisplays/patternLibrary.png";
import movieCategorizerDisplay from "../assets/projectDisplays/movieCategorizerdisplay.png"
import kohicafeDisplay from "../assets/projectDisplays/kohicafe-display.png"

const projects = [
    {
        "projectTitle": "Movie Categorizer",
        "index": "1",
        "AppType": "Web Application",
        "stack": ["React", "Firebase", "framer-motion"],
       "projectDescription": "A sleek and responsive movie category app that allows users to browse films by genre. The app fetches real-time data from a movie API, displaying posters, titles, and brief overviews in a grid layout. Designed with smooth transitions and intuitive navigation, it offers an engaging experience across all device types.",
        "githublink": "https://github.com/phynnoex/movieCatgeoryApp",
        "siteLink": "https://phynnoex.github.io/movieCatgeoryApp",
        "displayImage": movieCategorizerDisplay
    },
    {
        "projectTitle": "Quiz App",
        "index": "2",
        "AppType": "Mobile Application",
        "stack": ["React-Native", "Expo", "Firebase"],
        "projectDescription": "A mobile quiz application built with React Native and Expo. Users can test their knowledge on various topics through interactive multiple-choice questions. The app provides immediate feedback on selected answers and keeps track of scores. Firebase is integrated for real-time data storage, ensuring seamless user experience and progress tracking.",
        "githublink": "https://snack.expo.dev/@phynnoex/final-project-appquiz",
        "siteLink": "https://snack.expo.dev/@phynnoex/final-project-appquiz",
        "displayImage": projectDisplay
    },
    {
        "projectTitle": "Pattern Library/Dashboard",
        "index": "3",
        "AppType": "Web Application",
        "stack": ["HTML", "CSS", "D3.js", "Figma"],
        "projectDescription": "A comprehensive UI pattern library and interactive dashboard showcasing reusable design components and data visualizations. The project serves as a reference for maintaining consistent design patterns and UI elements in web applications. Built with D3.js, the dashboard includes dynamic charts and graphs for data representation, making it a useful tool for developers and designers.",
        "githublink": "https://github.com/phynnoex/patternlibrary",
        "siteLink": "https://phynnoex.github.io/patternlibrary",
        "displayImage": patternLibraryDisplay
    },
    {
        "projectTitle": "Kohicafe ecommerce site",
        "index": "4",
        "AppType": "Web Application",
        "stack": ["React", "Firebase", "Typescript", "sass"],
       "projectDescription": "A modern and responsive e-commerce website for Kohicafe, designed to provide a seamless shopping experience for customers. The site features a clean layout, intuitive navigation, and dynamic product displays. Built with React and TypeScript, it integrates Firebase for real-time inventory management and secure user authentication. Sass is used for efficient styling, ensuring a visually appealing design across all devices.",
        "githublink": "https://github.com/phynnoex/kohiCafe",
        "siteLink": "https://kohicafe.netlify.app",
        "displayImage": kohicafeDisplay
    },

]


export default projects;