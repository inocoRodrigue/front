import { EventEmitter, Injectable } from '@angular/core';
import { BACK_END_URL } from './HttpConfig';
import { HttpClient } from '@angular/common/http';
import { Partner } from '../models/Partner';

@Injectable({
  providedIn: 'root',
})
export class PartnerService {
  private readonly BASE_URL: string = `${BACK_END_URL}partners`;
  private readonly partnerEmitter = new EventEmitter<Partner[]>();

  constructor(private readonly httpClient: HttpClient) {}

  public fetchAllPartners(): void {
    this.httpClient.get<Partner[]>(this.BASE_URL).subscribe({
      next: (value: Partner[]) => {
        this.partnerEmitter.emit(value);
      },
      error: (error) => {},
    });
  }

  public addPartner(newPartner: Partner): void {
    this.httpClient.post<Partner[]>(this.BASE_URL, newPartner).subscribe({
      next: (value: Partner[]) => {
        this.partnerEmitter.emit(value);
      },
      error: (error) => {},
    });
  }

  public deletePartner(id: number): void {
    this.httpClient.delete(`${this.BASE_URL}/${id}`).subscribe({
      next: () => {
        this.fetchAllPartners();
      },
      error: (error) => {},
    });
  }

  public getPartnerEmitter(): EventEmitter<Partner[]> {
    return this.partnerEmitter;
  }
}
