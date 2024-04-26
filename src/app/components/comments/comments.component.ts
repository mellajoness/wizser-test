import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { MatDialog } from '@angular/material/dialog';
import { AddcommentsmodalComponent } from '../widgets/addcommentsmodal/addcommentsmodal.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss',
})
export class CommentsComponent implements OnInit {
  loading: boolean;
  constructor(private commentService: CommentsService,private dialog: MatDialog) {
    this.loading=false;
  }
  comments = [];
  openDialog() {
    const dialogRef = this.dialog.open(AddcommentsmodalComponent,{
      width:'500px',
      height:'500px'
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  ngOnInit() {
    this.loading=true
    this.commentService.getAllComments().subscribe(
      (posts: any) => {
        this.loading=false
        this.comments = posts;
      },
      (error: any) => {
        this.loading=false
      }
    );
  }
}
