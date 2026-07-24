import { Injectable } from '@angular/core';
import { JourneyType } from '../Types/app-types';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public readonly name: string = "Banda Tagore";
  public readonly profileImg: string = "assets/profile-img-no-background.png";

  public readonly roles: string[] = [
    "Front-End Engineer.",
    "Web Developer.",
    "UI / UX Developer.",
    "Passionate Coder."
  ];

  public heroSmallAbout: string = "A passionate Frontend Developer with 3+ years of experience in crafting responsive, dynamic web applications using Angular. I specialize in building intuitive user interfaces that deliver seamless user experiences.";

  public readonly aboutDescription: string = "Frontend Engineer with hands-on experience in building responsive, user-friendly web applications using Angular and modern frontend technologies. Skilled in developing reusable UI components, designing component layouts with HTML, CSS, and frameworks like Bootstrap and Tailwind CSS. Proficient in collaborating with cross-functional teams, working with Git version control, following Agile methodologies, and continuously enhancing UI/UX design and web performance skills."

  public socialMedias: { name: string, link: string, icon: string }[] = [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/tagore-banda/",
      icon: "bxl-linkedin"
    },
    {
      name: "github",
      link: "https://github.com/tagore9930",
      icon: "bxl-github"
    },
    {
      name: "whatsapp",
      link: "https://api.whatsapp.com/send?phone=918904356993",
      icon: "bxl-whatsapp"
    },
    {
      name: "gmail",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=tagore9930@gmail.com",
      icon: "bxl-gmail"
    },
  ]

  public readonly resumeLink: string = "https://drive.google.com/file/d/1Z9tNvrBWE7y3qvFkV0yW7DaxlUOMD7pu/view?usp=drive_link"

  public readonly skills: { img: string, name: string, officalSite: string }[] = [
    {
      img: "html.png",
      name: "HTML",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      img: "css.png",
      name: "CSS",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      img: "sass.png",
      name: "SASS",
      officalSite: 'https://sass-lang.com/'
    },
    {
      img: "bootstrap.png",
      name: "bootstrap",
      officalSite: 'https://getbootstrap.com/'
    },
    {
      img: "javascript.png",
      name: "Javascript",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      img: "typescript.png",
      name: "typescript",
      officalSite: 'https://www.typescriptlang.org/'
    },
    {
      img: "angular.png",
      name: "angular",
      officalSite: 'https://angular.dev/'
    },
    {
      img: "angular_material.png",
      name: "Material",
      officalSite: 'https://material.angular.dev/'
    },
    {
      img: "react.png",
      name: "react",
      officalSite: 'https://react.dev/'
    },
    {
      img: "figma.png",
      name: "figma",
      officalSite: 'https://figma.com/'
    },
    {
      img: "c.png",
      name: "C",
      officalSite: 'https://www.c-language.org/'
    },
    {
      img: "java.png",
      name: "java",
      officalSite: 'https://www.java.com/en/'
    },
    {
      img: "python.png",
      name: "python",
      officalSite: 'https://www.python.org/'
    },
    {
      img: "git.png",
      name: "git",
      officalSite: 'https://git-scm.com/'
    },
    {
      img: "github.png",
      name: "github",
      officalSite: 'https://github.com/'
    },
    {
      img: "gitlab.png",
      name: "gitLab",
      officalSite: 'https://about.gitlab.com/'
    },
    {
      img: "bitbucket.png",
      name: "bitbucket",
      officalSite: 'https://bitbucket.org/'
    },
    {
      img: "wrike.png",
      name: "wrike",
      officalSite: 'https://www.wrike.com/'
    },
    {
      img: "fiverr.png",
      name: "fiverr",
      officalSite: 'https://www.fiverr.com/'
    },
    {
      img: "upwork.png",
      name: "upwork",
      officalSite: 'https://www.upwork.com/'
    },
    {
      img: "freelancer.png",
      name: "freelancer",
      officalSite: 'https://www.freelancer.com/'
    },
  ];

  public readonly experiences: JourneyType[] = [
    {
      role: 'Frontend Angular Engineer',
      organization: 'Freelancer',
      location: 'Remote',
      duration: {
        start: new Date('01/01/2024'),
        end: null
      },
      description: "Built responsive components from scratch using Angular, developing reusable UI components, optimizing user experience, and collaborating in Agile environments.",
      bulletPoints: [
        "Developed reusable UI components with Angular libraries, promoting code consistency and significantly reducing development time.",
        "Designed responsive web layouts using modern CSS frameworks, ensuring a seamless user experience across all devices.",
        "Created user-friendly interfaces that enhanced user satisfaction and engagement.",
        "Skills Developed: Proficiency in Git, Agile development practices, and UI/UX design principles."
      ],
      topSkills: [
        {
          name: "Angular",
          officalLink: "https://angular.dev/"
        },
        {
          name: "Angular Material",
          officalLink: "https://material.angular.dev/"
        },
        {
          name: "Typescript",
          officalLink: "https://www.typescriptlang.org/"
        },
        {
          name: "HTML",
          officalLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "SASS",
          officalLink: "https://sass-lang.com/"
        }
      ]
    },
    {
      role: 'Web Development Intern',
      organization: 'Code Alpha',
      location: 'Remote',
      duration: {
        start: new Date('01/01/2024'),
        end: new Date('02/01/2024')
      },
      description: "Assisted in building and maintaining web applications, contributing to front-end development, optimizing UI/UX, and responsiveness.",
      bulletPoints: [
        "Participated in code reviews, ensuring adherence to best practices and maintaining high-quality standards throughout projects.",
        "Developed user interfaces with modern JavaScript frameworks, HTML5, and CSS3.",
        "Enhanced user experience by developing responsive website layouts and implementing cross-browser compatibility."
      ],
      topSkills: [
        {
          name: "Angular",
          officalLink: "https://angular.dev/"
        },
        {
          name: "Angular Material",
          officalLink: "https://material.angular.dev/"
        },
        {
          name: "Typescript",
          officalLink: "https://www.typescriptlang.org/"
        },
        {
          name: "HTML",
          officalLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "Bootstrap",
          officalLink: "https://getbootstrap.com/"
        }
      ]
    },
    {
      role: 'UI/UX Designer Intern',
      organization: 'CODSOFT',
      location: 'Remote',
      duration: {
        start: new Date('12/01/2023'),
        end: new Date('01/01/2024')
      },
      description: "Assisted in designing intuitive and user-friendly interfaces, conducting user research, and improving overall user experience.",
      bulletPoints: [
        "Participated in design review meetings to brainstorm new UX developments through collaborative thinking.",
        "Enhanced user experience by designing intuitive navigation and visually engaging interfaces.",
        "Developed responsive designs to ensure optimal performance on various devices and platforms."
      ],
      topSkills: [
        {
          name: "Angular",
          officalLink: "https://angular.dev/"
        },
        {
          name: "Angular Material",
          officalLink: "https://material.angular.dev/"
        },
        {
          name: "Typescript",
          officalLink: "https://www.typescriptlang.org/"
        },
        {
          name: "HTML",
          officalLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "Bootstrap",
          officalLink: "https://getbootstrap.com/"
        }
      ]
    },
    {
      role: 'Front-End Developer',
      organization: 'TUTUKAKA',
      location: 'Remote',
      duration: {
        start: new Date('05/01/2023'),
        end: new Date('08/01/2023')
      },
      description: "Involved in the design and maintenance of a web-based project",
      bulletPoints: [
        "Worked as UI & UX Designer on a Flights booking website project",
        "Gained experience in real-world project management"
      ],
      topSkills: [
        {
          name: "Angular",
          officalLink: "https://angular.dev/"
        },
        {
          name: "Angular Material",
          officalLink: "https://material.angular.dev/"
        },
        {
          name: "Typescript",
          officalLink: "https://www.typescriptlang.org/"
        },
        {
          name: "HTML",
          officalLink: "https://developer.mozilla.org/en-US/docs/Web/HTML"
        },
        {
          name: "SASS",
          officalLink: "https://sass-lang.com/"
        }
      ]
    }
  ]
  public readonly educations: JourneyType[] = [
    {
      role: 'SSC (Secondary School Certificate)',
      organization: 'ZPHS Open Distance School',
      location: 'Andhra Pradesh, India',
      duration: {
        start: new Date('06/01/2024'),
        end: new Date('05/01/2025')
      },
      description: 'Completed Secondary School Certificate (SSC) while working as a freelance Front-End Developer, gaining both academic knowledge and practical industry experience.',
      bulletPoints: [],
      topSkills: [
        {
          name: 'Mathematies',
          officalLink: ''
        }
      ]
    }
  ]

  public readonly projects: { name: string, description: string, hostLink: string, sourceLink: string, media: any }[] = [
    {
      name: '🗺️ Mapty',
      description: 'An interactive map application built with JavaScript that allows users to log, track, and visualize running and cycling workouts on an interactive map using geolocation and local storage.',
      hostLink: 'https://tagore-mapty.vercel.app/',
      media: '/assets/project-assets/mapty.png',
      sourceLink: 'https://github.com/Tagore9930/mapty'
    },
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
    }
  ];

  public readonly portfolioRepoLink: string = "https://github.com/Tagore9930/portfolio";
  public readonly portfolioCreatedYear: number = 2025;
  public readonly lastPortfolioUpdateDate: string = "July 20, 2026";

  constructor() { }
}
