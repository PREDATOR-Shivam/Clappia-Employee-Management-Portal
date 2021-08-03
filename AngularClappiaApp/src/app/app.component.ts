import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  myimage: string = "assets/images/clappia_logo_main.png";
  title = 'AngularClappiaApp';
  myimage2: string = "assets/images/clappia_bg.png";
  getUrl() {
    return "url('http://estringsoftware.com/wp-content/uploads/2017/07/estring-header-lowsat.jpg')";
  }
}
