import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Social, socials } from '@constants/socials';
import { techStacks, TechStack } from '@constants/stack';
import { WorkExperience, workExperiences } from '@constants/work-exp';
import { Project, projects } from '@constants/projects';
import { angrySmiley, smileys } from '@constants/smileys';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Bhargesj Patel';
  apiUrl: string = 'https://v2.jokeapi.dev/joke/Programming?type=single';
  jokeData: any;
  techStacks: TechStack[] = techStacks;
  workExperiences: WorkExperience[] = workExperiences;
  projects: Project[] = projects;
  socials: Social[] = socials;
  isHovered: boolean = false;
  smileys: string[] = smileys;
  angrySmiley: string = angrySmiley;
  smileyIcon?: string;
  currentIndex: number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getJokeData();
    this.setUpDefaults();
  }

  setUpDefaults(): void {
    this.smileyIcon = this.smileys[this.currentIndex];
    setInterval(() => {
      if (!this.isHovered) {
        this.showNextIcon();
      }
    }, 2000);
  }

  showNextIcon(): void {
    this.currentIndex = (this.currentIndex + 1) % this.smileys.length;
    this.smileyIcon = this.smileys[this.currentIndex];
  }

  onHover(state: boolean): void {
    this.isHovered = state;
    console.log(this.isHovered);
    if (this.isHovered) {
      this.smileyIcon = this.angrySmiley;
    } else {
      this.smileyIcon = this.smileys[this.currentIndex];
    }
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
