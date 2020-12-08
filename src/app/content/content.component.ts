import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  bool:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  condition(){
    this.bool=true;
  }


}
