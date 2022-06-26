import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponentsComponent } from './exercise-components/exercise-components.component';
import { SuccessAlertComponent } from './exercise-components/success-alert/success-alert.component';
import { WarningAlertComponent } from './exercise-components/warning-alert/warning-alert.component';
import { ExerciseDatabindingComponent } from './exercise-databinding/exercise-databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponentsComponent,
    ExerciseDatabindingComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
