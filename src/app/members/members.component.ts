import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { MembersService } from './members.service';

@Component({
  selector: 'members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.css'
})
export class MembersComponent implements OnInit{

  members$: Observable<Member[]> = new Observable<Member[]>();

  constructor( private membersService: MembersService) {
  }

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.members$ = this.membersService.getMembers();
   }

}
