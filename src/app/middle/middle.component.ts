import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  constructor(public user:UserService) { }

  ngOnInit(): void {
  }
  add()
  {
    this.user.addOne();
  }

}
