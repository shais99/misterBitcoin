import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  contact;
  moves;
  constructor(private route: ActivatedRoute, private contactService: ContactService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.contact = this.route.snapshot.data.contact
    this.moves = this.userService.getMovesListByContact(this.contact._id)
  }

  onRemoveContact(contactId) {
    this.contactService.deleteContact(contactId)
    this.router.navigateByUrl('/contacts')
  }

  getMovesListByContact(contactId) {
    this.userService.getMovesListByContact(contactId)
  }

  onTransferFund(amount) {
    // @TODO: SHOW THE ERRORS TO THE USER!
    if (!amount || amount > this.userService.user.coins) return;
    this.userService.addMove(this.contact, amount)
    this.userService.user.coins -= amount
    this.moves = this.userService.getMovesListByContact(this.contact._id)
  }

}
