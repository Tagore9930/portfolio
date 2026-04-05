import { ContactUsService } from './../../services/contact-us.service';
import { LoaderService } from './../../services/loader.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss', '../../developer.scss'],
})
export class ContactComponent {
  window = window;

  public contactForm!: FormGroup;
  public isFormSubmitting: boolean = false;

  constructor(
    private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private snackbarService: SnackbarService,
    private loaderService: LoaderService,
  ) {
    this.contactForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      fullName: ['', Validators.compose([Validators.required])],
      subject: ['', Validators.compose([Validators.required])],
      phoneNumber: [''],
      message: [''],
    });
  }

  public onSubmit() {
    console.log(this.contactForm);

    if (this.contactForm.invalid) {
      this.snackbarService.showSnackbar(
        'error',
        'Please fill required fields.',
      );

      return;
    }

    if (this.contactForm.valid) {
      this.loaderService.setloadingState = true;
      this.isFormSubmitting = true;

      this.contactUsService.submitForm(this.contactForm.value).subscribe({
        next: () => {
          this.loaderService.setloadingState = false;
          this.snackbarService.showSnackbar('success', 'Submited successfully');
          this.isFormSubmitting = false;
        },
        error: () => {
          this.loaderService.setloadingState = false;
          this.snackbarService.showSnackbar(
            'error',
            'Something went wrong, Please try again.',
          );
          this.isFormSubmitting = false;
        },
      });
    }
  }
}
