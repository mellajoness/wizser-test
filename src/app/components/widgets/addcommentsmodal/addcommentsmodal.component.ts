import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CommentsService } from '../../../services/comments.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addcommentsmodal',
  templateUrl: './addcommentsmodal.component.html',
  styleUrl: './addcommentsmodal.component.scss'
})
export class AddcommentsmodalComponent {
  myForm: FormGroup;
  loading: boolean;
  clicked: boolean;

  constructor(private fb: FormBuilder,private commentService: CommentsService,private _snackBar: MatSnackBar,public dialog: MatDialog) {
    this.loading = false;
    this.clicked=false;
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      body: ['', [Validators.required, Validators.minLength(2)]]
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
       'email': this.myForm.value.email,
       'body': this.myForm.value.body,
    };

  this.commentService.addComments(requestPayload).subscribe(response => {
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
