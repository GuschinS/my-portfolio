import { ProjectModel } from '../models/project.model';

export const Projects: ProjectModel[] = [
  {
    id: 1,
    title: 'CodeJam Webpack Project',
    description:
      'To run locally:\n' +
      '\n' +
      'git clone https://github.com/GuschinS/rsschool-stage0.git\n' +
      '\n' +
      'cd codejam\n' +
      '\n' +
      'npm install\n' +
      '\n' +
      'npm start',
    image: 'https://guschins.github.io/rsschool-cv/img/codejam_small.png',
    deploy: 'https://guschins.github.io/rsschool-stage0/codejam/dist/',
    code: 'https://github.com/GuschinS/rsschool-stage0/tree/main/codejam',
  },
  {
    id: 2,
    title: 'Momentum Webpack Project',
    description:
      'To run locally:\n' +
      '\n' +
      'git clone https://github.com/GuschinS/rsschool-stage0.git\n' +
      '\n' +
      'cd momentum\n' +
      '\n' +
      'npm install\n' +
      '\n' +
      'npm start',
    image: 'https://guschins.github.io/rsschool-cv/img/momentum_small.png',
    deploy: 'https://guschins.github.io/rsschool-stage0/momentum/dist/',
    code: 'https://github.com/GuschinS/rsschool-stage0/tree/main/momentum',
  },
  {
    id: 3,
    title: 'Travel Desktop and Mobile project',
    description: '',
    image: 'https://guschins.github.io/rsschool-cv/img/travel_small.png',
    deploy: 'https://guschins.github.io/rsschool-stage0/travel/',
    code: 'https://github.com/GuschinS/rsschool-stage0/tree/main/travel',
  },
  {
    id: 4,
    title: 'This project uses API restcountries',
    description:
      'Instructions:\n' +
      '\n' +
      'Run ng serve for a dev server. Navigate to http://localhost:4200/. The application will automatically reload if you change any of the source files.',
    image: 'https://guschins.github.io/rsschool-cv/img/angular_gwo_small.png',
    deploy: 'https://guschins.github.io/gwo/',
    code: 'https://github.com/GuschinS/gwo/',
  },
  {
    id: 5,
    title: 'MyReads Project',
    description:
      'To run locally:\n' +
      '\n' +
      'git clone https://github.com/GuschinS/reactnd-project-myreads.git\n' +
      '\n' +
      'cd reactnd-project-myreads\n' +
      '\n' +
      'npm install\n' +
      '\n' +
      'npm start',
    image: 'https://guschins.github.io/rsschool-cv/img/MyReads_small.png',
    deploy: '',
    code: 'https://github.com/GuschinS/reactnd-project-myreads/',
  },
  {
    id: 6,
    title: 'Pixel Art Maker',
    description: '',
    image: 'https://guschins.github.io/rsschool-cv/img/pam1_198x206.png',
    deploy: 'https://guschins.github.io/project-pixel-art-maker/',
    code: 'https://github.com/GuschinS/project-pixel-art-maker/',
  },
  {
    id: 7,
    title: 'Restaurant Reviews',
    description:
      'To run locally:\n' +
      '\n' +
      'In a terminal, check the version of Python you have: python -V.\n' +
      '\n' +
      'If you have Python 2.x, spin up the server with: python -m SimpleHTTPServer 8000 (or some other port, if port 8000 is already in use.)\n' +
      '\n' +
      'For Python 3.x, you can use: python -m http.server.\n' +
      '\n' +
      "If you don't have Python installed, navigate to Python's website to download and install the software.\n" +
      '\n' +
      'With your server running, visit the site: http://localhost:8000',
    image: 'https://guschins.github.io/rsschool-cv/img/rr_small.png',
    deploy: '',
    code: 'https://github.com/GuschinS/restaurant-udacity-stg1/',
  },
  {
    id: 8,
    title: 'Classic Arcade Game Clone',
    description:
      'Instructions:\n' +
      '\n' +
      'The player must go to the top, avoiding a collision with the bugs. In a collision, the player loses 1 life. 3 collisions - the end of the game. When a player reaches the top, he gets 10 points and returns to the starting position. Each time, the speed of beetles increases.',
    image: 'https://guschins.github.io/rsschool-cv/img/ag_small.png',
    deploy: 'https://guschins.github.io/frontend-nanodegree-arcade-game/',
    code: 'https://github.com/GuschinS/frontend-nanodegree-arcade-game/tree/master',
  },
  {
    id: 9,
    title: 'Memory game',
    description:
      'Dependencies\n' +
      '\n' +
      'I create this game using my own dom methods to keep the code clean. It does not depend on third-party libraries. No more jQuery and Boostrap. Just HTML, CSS and JavaScript! I find that the new Udacity courses on ES6 are amazing!\n' +
      '\n' +
      'Instructions:\n' +
      '\n' +
      'The game is built using simple HTML, CSS and JavaScript. Click on the map to open it. Maps will be flipped if the next card does not match the open one. Your score will depend on the moves taken to open all the cards. The less moves, the better.',
    image: 'https://guschins.github.io/rsschool-cv/img/gm1_198x204.png',
    deploy: 'https://guschins.github.io/rsschool-cv/img/gm1_198x204.png',
    code: 'https://github.com/GuschinS/fend-project-memory-game/',
  },
];
