import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public projectsList: { name: string, description: string, link: string, gif: any }[] = [
    {
      name: 'Portfolio',
      description: 'My personal portfolio website showcasing my skills and projects.',
      link: 'https://github.com/andrewsalvador/andrewsalvador.github.io',
      gif: 'https://media.giphy.com/media/3o6gDRlGZWR7acu1BS/giphy.gif?cid=ecf05e47khgc43llscz2vfklw4wurx9bji7q2zursd5ltn00&ep=v1_gifs_related&rid=giphy.gif&ct=g'
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website showcasing my skills and projects.',
      link: 'https://github.com/andrewsalvador/andrewsalvador.github.io',
      gif: 'https://media.giphy.com/media/3o6gDRlGZWR7acu1BS/giphy.gif?cid=ecf05e47khgc43llscz2vfklw4wurx9bji7q2zursd5ltn00&ep=v1_gifs_related&rid=giphy.gif&ct=g'
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website showcasing my skills and projects.',
      link: 'https://github.com/andrewsalvador/andrewsalvador.github.io',
      gif: 'https://media.giphy.com/media/3o6gDRlGZWR7acu1BS/giphy.gif?cid=ecf05e47khgc43llscz2vfklw4wurx9bji7q2zursd5ltn00&ep=v1_gifs_related&rid=giphy.gif&ct=g'
    },
    {
      name: 'Portfolio',
      description: 'My personal portfolio website showcasing my skills and projects.',
      link: 'https://github.com/andrewsalvador/andrewsalvador.github.io',
      gif: 'https://media.giphy.com/media/3o6gDRlGZWR7acu1BS/giphy.gif?cid=ecf05e47khgc43llscz2vfklw4wurx9bji7q2zursd5ltn00&ep=v1_gifs_related&rid=giphy.gif&ct=g'
    },
  ]

}
