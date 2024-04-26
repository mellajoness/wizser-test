import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../../services/comments.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-newentrymodal',
  templateUrl: './newentrymodal.component.html',
  styleUrl: './newentrymodal.component.scss'
})
export class NewentrymodalComponent {
  myForm: FormGroup;
  loading: boolean;
  clicked: boolean;

  constructor(private fb: FormBuilder,private commentService: CommentsService,private _snackBar: MatSnackBar,public dialog: MatDialog) {
    this.loading = false;
    this.clicked=false;
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      userName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      street: ['', [Validators.required, Validators.minLength(2)]],
      suite: ['', [Validators.required, Validators.minLength(2)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      zipCode: ['', [Validators.required, Validators.minLength(2)]],
      longitude: ['', [Validators.required, Validators.minLength(1)]],
      latitude: ['', [Validators.required, Validators.minLength(1)]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      website: ['', [Validators.required, Validators.minLength(3)]],
      companyName: ['', [Validators.required, Validators.minLength(2)]],
      catchPhrase: ['', [Validators.required, Validators.minLength(3)]],
      title: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  // Getter for easy access to form fields
  get f() {
    return this.myForm.controls;
  }

  onSubmit() {
    this.loading = true;
    this.clicked=true
    const requestPayload = {
       'name': this.myForm.value.name,
       'userName': this.myForm.value.userName,
       'email': this.myForm.value.email,
       'address': this.myForm.value.address,
       'phone': this.myForm.value.phone,
       'website': this.myForm.value.website,
       'company': this.myForm.value.company,
    };

  this.commentService.addUsers(requestPayload).subscribe(response => {
    this.loading = false;
    this.clicked=false
    if (response) {
      this._snackBar.open('Successfully updated', '',{
        duration: 3000
      });
      this.dialog.closeAll()
      
    } else {
      this._snackBar.open('An error occured', '',{
        duration: 3000
      });
      this.dialog.closeAll()      }
  
}, err => {
  this._snackBar.open('Network,Kindly check internet connections', '',{
    duration: 3000
  });
  this.dialog.closeAll()      });
}
}
