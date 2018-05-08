import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // css selector, means this component could invoked by html tag named 'app root'
  templateUrl: './app.component.html', // this is the content of the component, this metadata is required.
  styleUrls: ['./app.component.css'] // indicating a css file, which could be used by the template
})
export class AppComponent { // define the controller of the component, which is a typescript class
  title = 'Hello World!';
}
