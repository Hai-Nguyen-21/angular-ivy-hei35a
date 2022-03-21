import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  VERSION,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  

  name = 'Angular ' + VERSION.major;

  currentProgress = 0;
  isHide = false;

  upToProgress() {
    this.currentProgress = this.currentProgress + 10;
    if (this.currentProgress == 100) {
      this.isHide = !this.isHide;
    }
  }
}
