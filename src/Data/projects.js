import projectDisplay from "../assets/projectDisplays/quizMobile.png";
import laundaryDisplay from "../assets/projectDisplays/laundarySite.png";
import patternLibraryDisplay from "../assets/projectDisplays/patternLibrary.png";


const projects = [
    {
        "projectTitle": "Quiz App",
        "index": "1",
        "AppType": "Mobile Application",
        "stack": ["React-Native", "Expo", "Firebase"],
        "projectDescription": "A mobile quiz application built with React Native and Expo. Users can test their knowledge on various topics through interactive multiple-choice questions. The app provides immediate feedback on selected answers and keeps track of scores. Firebase is integrated for real-time data storage, ensuring seamless user experience and progress tracking.",
        "githublink": "https://snack.expo.dev/@phynnoex/final-project-appquiz",
        "siteLink": "https://snack.expo.dev/@phynnoex/final-project-appquiz",
        "displayImage": projectDisplay
    },
    {
        "projectTitle": "Laundry-site Landing Page",
        "index": "2",
        "AppType": "Web Application",
        "stack": ["JavaScript", "HTML", "CSS"],
        "projectDescription": "A modern and clean landing page for a laundry service business. The site presents essential business details, including available services, pricing, and contact information. Designed with a user-friendly layout, the page uses subtle animations and responsive design to enhance customer engagement.",
        "githublink": "https://github.com/phynnoex/Laundry-site",
        "siteLink": "https://phynnoex.github.io/Laundry-site",
        "displayImage": laundaryDisplay
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
    }

]


export default projects;