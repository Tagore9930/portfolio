import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss', '../../developer.scss']
})
export class ProjectsComponent {
  public projectsList: { name: string, description: string, hostLink: string, sourceLink: string, media: any }[] = [
    {
      name: '🐕 Pet Safety Tracker',
      description: 'A responsive Angular web app that helps pet owners remotely monitor and manage their pets\' safety and care tasks, deployed on Vercel.',
      hostLink: 'https://pets-safety-app.vercel.app/',
      media: '/assets/project-assets/pets-safety.png',
      sourceLink: 'https://github.com/Tagore9930/Pets-Safety-App'
    },
    {
      name: '🎮 Pig Game 🐷🎲',
      description: 'I built a fun and simple two-player dice game while learning JavaScript!',
      hostLink: 'https://pig-game-seven-plum.vercel.app/',
      media: '/assets/project-assets/pig-dice-game.png',
      sourceLink: 'https://github.com/Tagore9930/pig-game'
    },
    {
      name: 'Fyle UI Intern Challenge',
      description: 'I Build interactive and responsive user interface using Angular Material and Bootstrap.',
      hostLink: 'https://fyle-internship-challenge-23-delta-opal.vercel.app/',
      media: '/assets/project-assets/Fyle-UI-intern-challenge.png',
      sourceLink: 'https://github.com/Tagore9930/fyle-internship-challenge-23'
    },
    {
      name: 'CodeAlpha Internship',
      description: 'I’ve completed an amazing Web Developer internship at CodeAlpha! Grateful to the team for the experience and excited to apply what I’ve learned in future opportunities.',
      hostLink: 'https://code-alpha-intern.vercel.app/',
      media: '/assets/project-assets/code-alpha.png',
      sourceLink: 'https://github.com/Tagore9930/code-alpha'
    },
    {
      name: 'CODSOFT Internship',
      description: 'Completed an amazing UI/UX Designer internship at CODSOFT, where I gained valuable design experience and practical skills to apply in future projects.',
      hostLink: 'https://codsoft-intern.vercel.app/',
      media: '/assets/project-assets/codesoft.png',
      sourceLink: 'https://github.com/Tagore9930/CODSOFT'
    },
    {
      name: 'Guess My Number Game',
      description: 'A simple number guessing game built using HTML, CSS, and JavaScript. This project was created as a learning exercise and will be improved in the future with additional features and responsive design.',
      hostLink: 'https://guess-number-game-teal.vercel.app/',
      media: '/assets/project-assets/guess_my_number_game.png',
      sourceLink: 'https://github.com/Tagore9930/guess_the_number_game'
    },
    // {
    //   name: '',
    //   description: '',
    //   hostLink: '',
    //   media: '/assets/project-assets',
    //   sourceLink: 'https://github.com/Tagore9930/Roti-Admin-App'
    // },
  ]


  openLink(url: string) {
    window.open(url, '_blank');
  }

}
