import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidemenuComponent } from './layout/sidemenu/sidemenu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MainComponent } from './main/main.component';
import { CommentsComponent } from './components/comments/comments.component';
import { UsersComponent } from './components/users/users.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { TableComponent } from './components/widgets/table/table.component';
import { NewentrymodalComponent } from './components/widgets/newentrymodal/newentrymodal.component';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { HttpClientModule } from '@angular/common/http';
import { UserstableComponent } from './components/widgets/userstable/userstable.component';
import { PaginationComponent } from './components/widgets/pagination/pagination.component';
import { AddcommentsmodalComponent } from './components/widgets/addcommentsmodal/addcommentsmodal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidemenuComponent,
    MainComponent,
    CommentsComponent,
    UsersComponent,
    TableComponent,
    NewentrymodalComponent,
    UserstableComponent,
    PaginationComponent,
    AddcommentsmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    ReactiveFormsModule ,
    HttpClientModule,
    MatProgressSpinnerModule,
    
    // RouterModule.forRoot(appRoutes),
      FormsModule               
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
