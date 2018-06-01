import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent {
  amountDonated: number;

  public formMakeADonation: FormGroup = new FormGroup({
    'amount': new FormControl('', [Validators.required, Validators.min(0)]),
  });

  constructor() {
    this.amountDonated = 0;
  }

  donate() {
    this.amountDonated += this.formMakeADonation.controls['amount'].value;
    this.formMakeADonation.controls['amount'].reset();
  }
}
