import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css'],
  providers:[UserService]
})
export class RightComponent implements OnInit {

  constructor(public user:UserService) { }

  ngOnInit(): void {
  }
  add()
  {
    this.user.addOne();
  }
  }

