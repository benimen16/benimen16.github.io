import { Component, OnInit } from '@angular/core';
import { CardBody } from 'src/app/models/cardBody';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  aboutMeCard: CardBody = {
    title: 'About Me',
    description: [
      `Experienced Software Engineer with over 4 years of industry experience, specializing in full stack development and innovative solutions.
      I have a proven track record of delivering high-quality code and leading teams to success.
      I am exceptional at navigating complex challenges, adapting to evolving technologies, and I drive impactful results.
      I am skilled in designing and implementing robust front-end solutions, optimizing back-end systems, and regularly contribute to cost-saving initiatives.
      I am adept at fostering collaboration, streamlining processes, and delivering excellence in agile environments.
      I\'m always eager to leverage my expertise to drive innovation and exceed organizational objectives.`
    ],
    isJob: false
  };

  currentJobCard: CardBody = {
    title: 'Full Stack Software Engineer',
    subtitle: 'Vizient Inc. - Cape Girardeau, MO, USA',
    dateRange: 'July 2022 - Present',
    description: [
      'Developed full stack solutions across multiple teams within Vizient',
      'Designed and implemented front end solutions using Angular',
      'Designed and implemented back end solutions using .NET Core and Java',
      'Deployed code using ADO and Octopus. Have gained experience using Pulumi as a result',
      'Gained experience using Azure Portal',
      'Assisted with the design and deployment of Pharmacy related reports using PowerBI',
      'Managed and lead the design, development, and implementation of major features',
      'Contributed towards the development and refinement of the Vizient Toolkit, an Angular Material library specifically built for Vizient\'s needs',
      'Identified and fixed bugs throughout multiple applications',
      'Assisted in cost cutting efforts for the Pharmacy Pod, resulting in over 50% of cloud cost savings',
      'Assisted efforts in refactoring code and minimizing tech debt',
      'Participated in code reviews on a daily basis',
      'Lead team stand up on multiple occasions when Scrum Master was not available'
    ],
    isJob: true
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToProfessional(): void {
    this.router.navigateByUrl('/professional').then(result => {
      if(result) {
        console.log('Navigated to professional');
      }
    });
  }
}
