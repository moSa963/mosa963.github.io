
export type ProjectType = {
    name: string,
    description: string,
    technologies: Array<string>,
    preview: string | null,
    images: Array<string>,
    link: string,
}

export type ProjectGroupType = {
    name: string,
    description: string,
    projects: Array<ProjectType>,
}

export const projects: Array<ProjectGroupType> = [

    {
        name: "Chatroom",
        description: "The Real-Time Chatroom is an interactive web application. It features real-time communication powered by WebSocket technology, providing users with instant message delivery and a seamless chat experience. This project highlights expertise in creating state-managed React applications and integrating them with a robust Laravel backend for efficient and scalable real-time connections.",
        projects: [
            {
                name: "Backend",
                description: "Laravel application with the react frontend build.",
                technologies: [
                    "php",
                    "laravel",
                    "pusher",
                    "javascript",
                    "css",
                    "html",
                    "blade",
                ],
                images: [
                    "./images/chatroom/chatroom1.png",
                    "./images/chatroom/chatroom2.png",
                    "./images/chatroom/chatroom3.png",
                ],
                link: "https://github.com/moSa963/chatroom",
                preview: "https://github.com/moSa963/chatroom/assets/65834849/86ccb562-4549-4f27-8eeb-e99a1a14dd3d",
            },
            {
                name: "Web frontend",
                description: "React js frontend app.",
                technologies: [
                    "react",
                    "redux",
                    "javascript",
                    "css",
                    "html",
                    "mui",
                ],
                images: [
                    "./images/chatroom/chatroom5.png",
                    "./images/chatroom/chatroom4.png",
                ],
                link: "https://github.com/moSa963/chatroom-react",
                preview: "https://github.com/moSa963/chatroom/assets/65834849/86ccb562-4549-4f27-8eeb-e99a1a14dd3d",
            },
        ]
    },
    {
        name: "Client portfolio",
        description: "This modern and interactive portfolio web application was developed using Vue.js, showcasing the projects and expertise of an architect engineer. It provides a sleek and responsive design tailored for displaying projects with high-quality visuals, detailed descriptions, and interactive features.",
        projects: [
            {
                name: "live",
                description: "vue app.",
                technologies: [
                    "vue",
                    "javascript",
                    "css",
                    "html",
                    "tailwind",
                ],
                images: [
                    "./images/clientportfolio/2.png",
                    "./images/clientportfolio/1.png",
                    "./images/clientportfolio/3.png",
                    "./images/clientportfolio/4.png",
                ],
                link: "https://aisha-architect.github.io",
                preview: "./images/clientportfolio/preview.mp4",
            },
        ]
    },
    {
        name: "Mystorage",
        description: "MyStorage is a cloud storage and file-sharing web application. It enables users to securely upload, store, and share files with ease. This project demonstrates proficiency in building full-stack applications with a focus on security, scalability, and user-centric design.",
        projects: [
            {
                name: "Backend",
                description: "Laravel application with the react frontend build.",
                technologies: [
                    "php",
                    "laravel",
                    "javascript",
                    "css",
                    "html",
                    "blade",
                ],
                images: [
                    "./images/mystorage/mystorage2.png",
                    "./images/mystorage/mystorage1.png",
                ],
                link: "https://github.com/moSa963/mystorage",
                preview: "https://github.com/moSa963/mystorage/assets/65834849/12350650-c3fa-46f9-a79d-b9c826e811ab",
            },
            {
                name: "Web frontend",
                description: "React js frontend app.",
                technologies: [
                    "react",
                    "javascript",
                    "css",
                    "html",
                    "mui",
                ],
                images: [
                    "./images/mystorage/mystorage5.png",
                    "./images/mystorage/mystorage3.png",
                    "./images/mystorage/mystorage4.png",
                ],
                link: "https://github.com/moSa963/mystorage-react",
                preview: "https://github.com/moSa963/mystorage/assets/65834849/12350650-c3fa-46f9-a79d-b9c826e811ab",
            },
        ]
    },
    {
        name: "Soundstream",
        description: "SoundStream is a multi-platform application designed for sharing and listening to songs, complete with lyrics display. SoundStream delivers a seamless and engaging experience across devices. The app features secure song sharing, dynamic lyrics syncing, and a modern interface. This project highlights expertise in cross-platform development, robust backend integration, and crafting intuitive user experiences tailored for music enthusiasts.",
        projects: [
            {
                name: "Backend",
                description: "Laravel application with the react frontend build.",
                technologies: [
                    "php",
                    "laravel",
                    "javascript",
                    "css",
                    "html",
                    "blade",
                ],
                images: [
                    "./images/soundstream/soundstream1.png",
                    "./images/soundstream/soundstream2.png",
                ],
                link: "https://github.com/moSa963/soundstream",
                preview: "./images/soundstream/preview.mp4",
            },
            {
                name: "Mobile app",
                description: "Flutter frontend app.",
                technologies: [
                    "flutter",
                    "dart",
                ],
                images: [
                    "./images/soundstream/soundstream7.png",
                    "./images/soundstream/soundstream5.png",
                    "./images/soundstream/soundstream6.png",
                    "./images/soundstream/soundstream8.png",
                ],
                link: "https://github.com/moSa963/soundstream-flutter",
                preview: "./images/soundstream/preview2.mp4",
            },
            {
                name: "Web application",
                description: "React js frontend app.",
                technologies: [
                    "react",
                    "javascript",
                    "css",
                    "html",
                    "mui",
                ],
                images: [
                    "./images/soundstream/soundstream3.png",
                    "./images/soundstream/soundstream4.png",
                ],
                link: "https://github.com/moSa963/soundstream-vite",
                preview: "./images/soundstream/preview.mp4",
            },
        ]
    },
    {
        name: "HouseRental",
        description: "HouseRental is a user-friendly web application designed to simplify the process of renting houses.HouseRental provides a seamless experience for users to browse, book, and manage property rentals.",
        projects: [
            {
                name: "Backend",
                description: "Laravel application with the react frontend build.",
                technologies: [
                    "php",
                    "laravel",
                    "javascript",
                    "css",
                    "html",
                    "blade",
                ],
                images: [
                    "https://github.com/moSa963/HouseRental/blob/master/preview1.png?raw=true",
                    "https://github.com/moSa963/HouseRental/blob/master/preview3.png?raw=true",
                ],
                link: "https://github.com/moSa963/house-rental",
                preview: "./images/houserental/preview.mp4",
            },
            {
                name: "Web application",
                description: "Next js frontend app.",
                technologies: [
                    "next js",
                    "javascript",
                    "css",
                    "html",
                    "mui",
                ],
                images: [
                    "https://github.com/moSa963/HouseRental/blob/master/preview5.png?raw=true",
                    "https://github.com/moSa963/HouseRental/blob/master/preview4.png?raw=true",
                ],
                link: "https://github.com/moSa963/house-rental-react",
                preview: "./images/houserental/preview.mp4",
            },
        ]
    },
    {
        name: "Myphoto",
        description: "MyPhoto is a social media application designed for sharing images and fostering engagement through likes and comments. MyPhoto offers a seamless experience for users to connect and share their moments visually.",
        projects: [
            {
                name: "Backend",
                description: "Django application as a backend api.",
                technologies: [
                    "django",
                    "python",
                ],
                images: [
                    "https://github.com/moSa963/MyPhoto-react-native/blob/master/preview1.jpg?raw=true",
                    "https://github.com/moSa963/MyPhoto-react-native/blob/master/preview.jpg?raw=true",
                ],
                link: "https://github.com/moSa963/myphoto",
                preview: "./images/myphoto/preview.mp4",
            },
            {
                name: "Mobile app",
                description: "React native frontend app.",
                technologies: [
                    "react native",
                    "javascript",
                ],
                images: [
                    "https://github.com/moSa963/MyPhoto-react-native/blob/master/preview2.jpg?raw=true",
                ],
                link: "https://github.com/moSa963/myphoto-react-native",
                preview: "./images/myphoto/preview.mp4",
            },
        ]
    },
    {
        name: "Paint",
        description: "Paint is a simple drawing web app created with vanilla JavaScript. The app allows users to interact with an intuitive canvas to create and manipulate shapes with ease.",
        projects: [
            {
                name: "Web application",
                description: "A lightweight static web app.",
                technologies: [
                    "html",
                    "css",
                    "javascript",
                ],
                images: [
                    "https://github.com/moSa963/paint/blob/master/preview.png?raw=true",
                ],
                link: "https://github.com/moSa963/Paint",
                preview: "./images/paint/preview.mp4",
            },
        ]
    },
    {
        name: "flappybird clone",
        description: "FlappyClone is a mobile game app inspired by the classic Flappy Bird.",
        projects: [
            {
                name: "flutter",
                description: "flutter mobile app",
                technologies: [
                    "flutter",
                    "dart",
                ],
                images: [
                    "https://github-production-user-asset-6210df.s3.amazonaws.com/65834849/268520398-0e2df5d7-c9b9-4fbe-bb79-02cfe7eaa631.png",
                ],
                link: "https://github.com/moSa963/flappybird_flutter",
                preview: "./images/flappybird/preview.mp4",
            },
        ]
    },
    {
        name: "Recipes",
        description: "Recipes is a web application allowing users to discover, share, and manage their favorite recipes. This project provides a smooth, interactive experience for cooking enthusiasts, with a focus on easy navigation and an intuitive interface.",
        projects: [
            {
                name: "Backend and frontend",
                description: "laravel web app",
                technologies: [
                    "php",
                    "laravel",
                    "blade",
                    "html",
                    "css",
                    "javascript",
                ],
                images: [
                    "https://github.com/moSa963/Recipes/blob/master/preview.png?raw=true",
                    "https://github.com/moSa963/Recipes/blob/master/preview3.png?raw=true",
                    "https://github.com/moSa963/Recipes/blob/master/preview2.png?raw=true",
                ],
                link: "https://github.com/moSa963/Recipes",
                preview: "./images/recipes/preview.mp4",
            },
        ]
    },
    {
        name: "Manga World",
        description: "Manga World is a dynamic and user-friendly web application. It offers seamless navigation, interactive features, and a robust backend to ensure an engaging user experience. This project showcases expertise in combining a powerful PHP framework with a modern JavaScript library to create responsive and scalable web solutions.",
        projects: [
            {
                name: "Backend",
                description: "Laravel application.",
                technologies: [
                    "php",
                    "laravel",
                    "blade",
                ],
                images: [
                    "./images/mangaworld/mangaworld1.png",
                    "./images/mangaworld/mangaworld2.png",
                ],
                link: "https://github.com/moSa963/manga-world",
                preview: "./images/mangaworld/preview.mp4",
            },
            {
                name: "Web frontend",
                description: "Vue js frontend app.",
                technologies: [
                    "vue3",
                    "typescript",
                    "html",
                    "css",
                    "javascript",
                ],
                images: [
                    "./images/mangaworld/mangaworld3.png",
                    "./images/mangaworld/mangaworld2.png",
                ],
                link: "https://github.com/moSa963/manga-world",
                preview: "./images/mangaworld/preview.mp4",
            },
        ]
    },
    {
        name: "MindGames",
        description: "MindGames is an android mobile app that contains four different games that will challenge your brain.",
        projects: [
            {
                name: "MindGames",
                description: "This app was built using android studio/java",
                technologies: [
                    "java",
                    "android studio",
                ],
                images: [
                    "https://github.com/moSa963/MindGames/blob/master/preview.jpg?raw=true",
                    "https://github.com/moSa963/MindGames/blob/master/preview2.jpg?raw=true",
                ],
                link: "https://github.com/moSa963/MindGames",
                preview: "./images/mindgames/preview.mp4",
            },
        ]
    },
    {
        name: "Tetris",
        description: "A simple Tetris game.",
        projects: [
            {
                name: "Tetris",
                description: "This app was built using c++/SFML.",
                technologies: [
                    "c++",
                    "sfml",
                ],
                images: [
                    "https://github.com/moSa963/Tetris/blob/master/preview.png?raw=true",
                ],
                link: "https://github.com/moSa963/Tetris",
                preview: "./images/tetris/preview.mp4",
            },
        ]
    },
    {
        name: "Snake game",
        description: "A simple snake game.",
        projects: [
            {
                name: "Snake game",
                description: "This app was built using c++/SFML.",
                technologies: [
                    "c++",
                    "sfml",
                ],
                images: [
                    "https://github.com/moSa963/snakeGame/blob/master/preview.png?raw=true",
                ],
                link: "https://github.com/moSa963/SnakeGame",
                preview: "./images/snakegame/preview.mp4",
            },
        ]
    },
    {
        name: "Visualizer",
        description: "Application to visualize some path algorithms such as A* and Dijkstra algorithms which are used to find the shortest path between the starting point and the target. And backtracking algorithm to create a maze.",
        projects: [
            {
                name: "Visualizer",
                description: "This app was built using the Universal Windows Platform (UWP).",
                technologies: [
                    "c#",
                    "UWP",
                ],
                images: [
                    "https://github.com/moSa963/Visualizer/blob/master/preview.png?raw=true",
                ],
                link: "https://github.com/moSa963/visualizer",
                preview: "./images/visualizer/preview.mp4",
            },
        ]
    },
    {
        name: "Portfolio",
        description: "Welcome to my portfolio, This is where I showcase my creative and technical skills, demonstrating a passion for innovation and problem-solving.",
        projects: [
            {
                name: "Portfolio vue",
                description: "Vue js app.",
                technologies: [
                    "vue3",
                    "typescript",
                    "html",
                    "css",
                ],
                images: [
                    "./images/portfolio/portfolio1.png",
                    "./images/portfolio/portfolio2.png",
                    "./images/portfolio/portfolio3.png",
                ],
                link: "https://github.com/moSa963/mosa963.github.io",
                preview: null,
            },
        ]
    },
]
