import { Component } from '@angular/core';
import { Direction, ProcessedFlowType } from '../../models/enum';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Partner } from '../../models/Partner';
import { PartnerService } from '../../services/partner.service';

@Component({
  selector: 'app-add-partner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-partner.component.html',
  styleUrl: './add-partner.component.scss',
})
export class AddPartnerComponent {
  directionOptions = Object.values(Direction);
  processedFlowTypeOptions = Object.values(ProcessedFlowType);
  newPartner: Partner = {
    id: 0,
    alias: '',
    type: '',
    direction: '',
    application: '',
    processedFlowType: '',
    description: '',
  };
  isModalOpen = false;

  public constructor(private partnerService: PartnerService) {}

  openModal(): void {
    this.isModalOpen = true;
    this.resetNewPartner();
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  addPartner(): void {
    this.partnerService.addPartner(this.newPartner);
    this.closeModal();
  }

  resetNewPartner(): void {
    this.newPartner = {
      id: 0,
      alias: '',
      type: '',
      direction: '',
      application: '',
      processedFlowType: '',
      description: '',
    };
  }
}
