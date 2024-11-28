import { Social, socials } from './shared/constants/socials';
import { techStacks, TechStack } from './shared/constants/stack';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { WorkExperience, workExperiences } from '@constants/work-exp';
import { Project, projects } from '@constants/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'bhargesh_portfolio';
  apiUrl: string = 'https://v2.jokeapi.dev/joke/Programming?type=single';
  jokeData: any;
  techStacks: TechStack[] = techStacks;
  workExperiences: WorkExperience[] = workExperiences;
  projects: Project[] = projects;
  socials: Social[] = socials;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJokeData();
  }

  getJokeData(): any {
    this.http.get(`${this.apiUrl}`).subscribe({
      next: (response) => {
        console.log('Data:', response);
        this.jokeData = response;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
