
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

export const projects : Array<ProjectGroupType> = [
    {
        name: "Chatroom",
        description: "ChatRoom is a real-time chat application that brings people together in virtual chat rooms.",
        projects: [
            {
                name: "laravel backend",
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
                name: "web frontend",
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
        name: "Mystorage",
        description: "Mystorage is a file storage web application that empowers users to securely store and manage their files.",
        projects: [
            {
                name: "laravel",
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
                name: "web frontend",
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
        description: "Soundstream is a project that lets users share and discover music effortlessly.",
        projects: [
            {
                name: "laravel",
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
                name: "mobile app",
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
                name: "web application",
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
        description: "HouseRental is a web application designed to simplify the process of renting and finding apartments and houses. It provides a user-friendly platform for property owners to list their available spaces for rent and for potential tenants to discover and secure their ideal living spaces.",
        projects: [
            {
                name: "laravel",
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
                name: "web application",
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
        description: "Myphoto is a project that brings people together through the joy of photography. This application provides a platform for users to share their favorite photos.",
        projects: [
            {
                name: "django",
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
                preview: null,
            },
            {
                name: "mobile app",
                description: "React native frontend app.",
                technologies: [
                    "react native",
                    "javascript",
                ],
                images: [
                    "https://github.com/moSa963/MyPhoto-react-native/blob/master/preview2.jpg?raw=true",
                ],
                link: "https://github.com/moSa963/myphoto-react-native",
                preview: null,
            },
        ]
    },
    {
        name: "Paint",
        description: "Paint is a lightweight web application that lets users unleash their creativity by drawing on a virtual whiteboard.",
        projects: [
            {
                name: "Paint",
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
                name: "flappybird",
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
        description: "Recipes is a project dedicated to the joy of cooking and sharing delicious recipes.",
        projects: [
            {
                name: "Recipes",
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
                preview: null,
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
        description: "Application to visuilaiz some path algorithms such as A* and Dijkstra algorithms which are used to find the shortest path between the starting point and the target. And backtracking algorithm to create a maze.",
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
