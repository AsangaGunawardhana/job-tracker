import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../../services/job.service';
import { AuthService } from '../../services/auth.service';
import { StatusCountPipe } from '../../pipes/status-count.pipe';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, StatusCountPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  jobs: any[] = [];
  showForm = false;
  newJob = { company: '', position: '', status: 'Applied', notes: '' };

  constructor(
    private jobService: JobService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getJobs().subscribe({
      next: (res: any) => {
        this.jobs = res;
      },
      error: () => {
        this.router.navigate(['/login']);
      },
    });
  }

  addJob() {
    this.jobService.addJob(this.newJob).subscribe({
      next: () => {
        this.loadJobs();
        this.newJob = {
          company: '',
          position: '',
          status: 'Applied',
          notes: '',
        };
        this.showForm = false;
      },
    });
  }

  updateStatus(id: string, status: string) {
    this.jobService.updateStatus(id, status).subscribe({
      next: () => {
        this.loadJobs();
      },
    });
  }
  
  deleteJob(id: string) {
    this.jobService.deleteJob(id).subscribe({
      next: () => {
        this.loadJobs();
      },
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
