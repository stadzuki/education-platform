import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ep-loader',
  templateUrl: './ep-loader.component.html',
  styleUrls: ['./ep-loader.component.scss']
})
export class EpLoaderComponent implements OnInit {

  @Input('useOverlay') useOverlay: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
