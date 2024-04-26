import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { MatDialog } from '@angular/material/dialog';
import { NewentrymodalComponent } from '../widgets/newentrymodal/newentrymodal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
  loading: boolean;
  constructor(private commentService: CommentsService,public dialog: MatDialog) {
    this.loading=false
  }
  users=[]

  openDialog() {
    const dialogRef = this.dialog.open(NewentrymodalComponent,{
      width:'500px',
      height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.loading=true
    this.commentService.getAllUsers().subscribe(
      (posts: any) => {
        this.loading=false
        this.users=posts
      },
      (error: any) => {
        this.loading=false
      }
    );
  }
}
