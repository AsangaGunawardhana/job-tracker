import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://localhost:5000/api/jobs';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {}

  private getHeaders() {
    return new HttpHeaders({
      Authorization: this.authService.getToken() || '',
    });
  }

  getJobs() {
    return this.http.get(this.apiUrl, { headers: this.getHeaders() });
  }

  addJob(job: any) {
    return this.http.post(this.apiUrl, job, { headers: this.getHeaders() });
  }

  updateStatus(id: string, status: string) {
    return this.http.patch(
      `${this.apiUrl}/${id}`,
      { status },
      { headers: this.getHeaders() },
    );
  }

  deleteJob(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      headers: this.getHeaders(),
    });
  }
}
