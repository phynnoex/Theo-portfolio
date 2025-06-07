import projectDisplay from "../assets/projectDisplays/quizMobile.png";
import laundaryDisplay from "../assets/projectDisplays/laundarySite.png";
import patternLibraryDisplay from "../assets/projectDisplays/patternLibrary.png";
import movieCategorizerDisplay from "../assets/projectDisplays/movieCategorizerdisplay.png"
import bookLogDisplay from "../assets/projectDisplays/bookLogdisplay.png"

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
        "projectTitle": "Book Management application with chatbot",
        "index": "3",
        "AppType": "Web Application",
        "stack": ["Javascript", "Firebase", "gemini AI", "github actions"],
       "projectDescription": "An interactive and responsive book logging app that allows users to manage their reading list with the help of a built-in chatbot. Users can add books by chatting with the assistant, which guides them through the input process. The site features a clean layout, animated UI elements, and a seamless experience across devices.",
        "githublink": "https://github.com/phynnoex/BookLogWebTrend",
        "siteLink": "https://phynnoex.github.io/BookLogWebTrend",
        "displayImage": bookLogDisplay
    },
    {
        "projectTitle": "Pattern Library/Dashboard",
        "index": "4",
        "AppType": "Web Application",
        "stack": ["HTML", "CSS", "D3.js", "Figma"],
        "projectDescription": "A comprehensive UI pattern library and interactive dashboard showcasing reusable design components and data visualizations. The project serves as a reference for maintaining consistent design patterns and UI elements in web applications. Built with D3.js, the dashboard includes dynamic charts and graphs for data representation, making it a useful tool for developers and designers.",
        "githublink": "https://github.com/phynnoex/patternlibrary",
        "siteLink": "https://phynnoex.github.io/patternlibrary",
        "displayImage": patternLibraryDisplay
    }

]


export default projects;