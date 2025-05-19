import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { JourneyType } from 'src/app/Types/app-types';
@Component({
  selector: 'my-journeys',
  templateUrl: './my-journeys.component.html',
  styleUrls: ['./my-journeys.component.scss']
})
export class MyJourneyComponent implements OnInit {
  public isExperience: boolean = true;
  private experiences: JourneyType[] = [
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
  private educations: JourneyType[] = [
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
  public journeys: JourneyType[] = [];

  constructor(private cdr: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.changeJourneyType();
  }

  public changeJourneyType(): void {
    console.log("isExperience", this.isExperience);

    this.journeys = (this.isExperience) ? this.experiences : this.educations;
    this.cdr.detectChanges()
  }
}
