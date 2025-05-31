import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss', '../../developer.scss']
})
export class AboutComponent {

  public skillsList: { sillImg: string, skillName: string, officalSite: string }[] = [
    {
      sillImg: "html.png",
      skillName: "HTML",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },
    {
      sillImg: "css.png",
      skillName: "CSS",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },
    {
      sillImg: "sass.png",
      skillName: "SASS",
      officalSite: 'https://sass-lang.com/'
    },
    {
      sillImg: "bootstrap.png",
      skillName: "bootstrap",
      officalSite: 'https://getbootstrap.com/'
    },
    {
      sillImg: "javascript.png",
      skillName: "Javascript",
      officalSite: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      sillImg: "typescript.png",
      skillName: "typescript",
      officalSite: 'https://www.typescriptlang.org/'
    },
    {
      sillImg: "angular.png",
      skillName: "angular",
      officalSite: 'https://angular.dev/'
    },
    {
      sillImg: "angular_material.png",
      skillName: "Material",
      officalSite: 'https://material.angular.dev/'
    },
    {
      sillImg: "react.png",
      skillName: "react",
      officalSite: 'https://react.dev/'
    },
    {
      sillImg: "c.png",
      skillName: "C",
      officalSite: 'https://www.c-language.org/'
    },
    {
      sillImg: "java.png",
      skillName: "java",
      officalSite: 'https://www.java.com/en/'
    },
    {
      sillImg: "python.png",
      skillName: "python",
      officalSite: 'https://www.python.org/'
    },
    {
      sillImg: "git.png",
      skillName: "git",
      officalSite: 'https://git-scm.com/'
    },
    {
      sillImg: "github.png",
      skillName: "github",
      officalSite: 'https://github.com/'
    },
    {
      sillImg: "gitlab.png",
      skillName: "gitLab",
      officalSite: 'https://about.gitlab.com/'
    },
    {
      sillImg: "bitbucket.png",
      skillName: "bitbucket",
      officalSite: 'https://bitbucket.org/'
    },
    {
      sillImg: "wrike.png",
      skillName: "wrike",
      officalSite: 'https://www.wrike.com/'
    },
  ]

  window = window
}
