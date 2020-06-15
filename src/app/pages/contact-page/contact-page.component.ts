import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  filterBy = ''
  contacts = []

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.contacts$.subscribe(contacts => {
      this.contacts = contacts;
    })
    this.contactService.loadContacts()
  }

  onFilterBy(ev) {
    this.filterBy = ev.target.value
    this.contactService.loadContacts(this.filterBy)
  }

}
