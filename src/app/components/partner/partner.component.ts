import { Component, inject } from '@angular/core';
import { PartnerService } from '../../services/partner.service';
import { CommonModule } from '@angular/common';
import { AddPartnerComponent } from '../add-partner/add-partner.component';
import { Partner } from '../../models/Partner';
import { ValuesPipe } from '../../pipes/values.pipe';

@Component({
  selector: 'app-partner',
  standalone: true,
  imports: [CommonModule, AddPartnerComponent, ValuesPipe],
  templateUrl: './partner.component.html',
  styleUrl: './partner.component.scss',
})
export class PartnerComponent {
  private partnerService: PartnerService = inject(PartnerService);
  partners: Partner[] = [];
  headers: string[] = [];
  addingPartner: boolean = false;

  public ngOnInit(): void {
    this.partnerService.getPartnerEmitter().subscribe({
      next: (value: Partner[]) => {
        this.partners = value;
        if (this.partners.length != 0) {
          this.headers = [...Object.keys(this.partners[0]), 'Action'];
        }
      },
    });
    this.partnerService.fetchAllPartners();
  }

  deletePartner(id: number | undefined) {
    this.partnerService.deletePartner(id);
  }
}
