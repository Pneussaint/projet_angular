import { Component, OnInit } from '@angular/core';
import { Member } from '../members/member';


@Component({
  selector: '/member',
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent implements OnInit {
  member: Member = {} as Member;

  constructor() {
  }

  ngOnInit() {
    this.member = history.state;
  }
}
