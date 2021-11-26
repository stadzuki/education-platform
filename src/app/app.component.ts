import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.dataset.theme = 'light'
  }

  changeThemePage() {
    if (this.elementRef.nativeElement.dataset.theme === 'dark') {
      this.elementRef.nativeElement.dataset.theme = 'light'
    } else if (this.elementRef.nativeElement.dataset.theme === 'light') {
      this.elementRef.nativeElement.dataset.theme = 'dark'
    }
  }

}
