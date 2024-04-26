import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: 'comments', pathMatch: 'full' },
  { path: 'comments', component: CommentsComponent },
  { path: 'users', component: UsersComponent },
  // { path: 'profile', component: ProfileComponent },
  // { path: 'timetable', component: TimetableComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
