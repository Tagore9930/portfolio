import { Component } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  public skillsList: { sillImg: string, skillName: string }[] = [
    {
      sillImg: "html.png",
      skillName: "HTML"
    },
    {
      sillImg: "css.png",
      skillName: "CSS"
    },
    {
      sillImg: "sass.png",
      skillName: "SASS"
    },
    {
      sillImg: "bootstrap.png",
      skillName: "bootstrap"
    },
    {
      sillImg: "javascript.png",
      skillName: "Javascript"
    },
    {
      sillImg: "typescript.png",
      skillName: "typescript"
    },
    {
      sillImg: "angular.png",
      skillName: "angular"
    },
    {
      sillImg: "angular_material.png",
      skillName: "Material"
    },
    {
      sillImg: "react.png",
      skillName: "react"
    },
    {
      sillImg: "git.png",
      skillName: "git"
    },
    {
      sillImg: "github.png",
      skillName: "github"
    },
    {
      sillImg: "gitlab.png",
      skillName: "gitLab"
    },
    {
      sillImg: "bitbucket.png",
      skillName: "bitbucket"
    },
    {
      sillImg: "wrike.png",
      skillName: "wrike"
    },
  ]

  window = window
}
