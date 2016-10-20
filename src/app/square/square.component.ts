import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent{
  @Input() private token: string;

  constructor() { }
}
