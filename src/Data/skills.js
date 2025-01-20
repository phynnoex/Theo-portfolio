// Import FontAwesome icons
import { faReact, faJs, faHtml5, faCss3Alt, faPhp, faAngular } from '@fortawesome/free-brands-svg-icons';
import { faCube } from '@fortawesome/free-solid-svg-icons'; // Example for Three.js
import { faChartBar } from '@fortawesome/free-solid-svg-icons'; // Example for D3.js

const skills = [
    {
        skillTitle: 'React',
        levelOfTen: 7,
        icon: faReact, // React icon
    },
    {
        skillTitle: 'Javascript',
        levelOfTen: 8,
        icon: faJs, // Javascript icon
    },
    {
        skillTitle: 'HTML',
        levelOfTen: 8,
        icon: faHtml5, // HTML icon
    },
    {
        skillTitle: 'CSS',
        levelOfTen: 9,
        icon: faCss3Alt, // CSS icon
    },
    {
        skillTitle: 'React-Native',
        levelOfTen: 8,
        icon: faReact, // Reusing React icon for React Native
    },
    {
        skillTitle: 'PHP',
        levelOfTen: 7,
        icon: faPhp, // PHP icon
    },
    {
        skillTitle: 'Three.js',
        levelOfTen: 7,
        icon: faCube, // Example solid icon for Three.js
    },
    {
        skillTitle: 'Angular',
        levelOfTen: 7,
        icon: faAngular, // Angular icon
    },
    {
        skillTitle: 'D3.js',
        levelOfTen: 6,
        icon: faChartBar, // Example solid icon for D3.js
    },
];

export default skills;
