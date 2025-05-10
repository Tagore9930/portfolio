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
      sillImg: "javascript.png",
      skillName: "Javascript"
    },
    // {
    //   sillImg: ".png",
    //   skillName: ""
    // },
    // {
    //   sillImg: ".png",
    //   skillName: ""
    // },
  ]

  window = window
}
