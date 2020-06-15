import { Component, OnInit, EventEmitter, Output, ElementRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class NavbarComponent implements OnInit {

  @Output() onLogout = new EventEmitter

  constructor(private userService: UserService, private _eref: ElementRef) { }
  user;
  isMenuOpen: boolean = false;

  ngOnInit(): void {
    this.user = this.userService.user
  }

  onToggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onClick(event) {
    if (!this._eref.nativeElement.contains(event.target) && this.isMenuOpen) this.onToggleMenu()
  }
}
