import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output()event = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked():void{
    this.event.emit();
  }

}
