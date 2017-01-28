import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Material';
  message: String = "";

  onSubmit(form: any): void {
    console.log('You submitted value:', form)
    this.message = "First: " + form.firstName + ", Last: " + form.lastName;
  }

}
