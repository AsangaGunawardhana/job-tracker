import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'statusCount', standalone: true })
export class StatusCountPipe implements PipeTransform {
  transform(jobs: any[], status: string): number {
    return jobs.filter((j) => j.status === status).length;
  }
}
