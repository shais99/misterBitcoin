import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    phone: ''
  }

  constructor(private route: ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    const contactData = this.route.snapshot.data.contact
    this.contact = (contactData) ? contactData : this.contact
  }

  onSaveContact() {
    this.contactService.saveContact(this.contact)
    this.router.navigateByUrl('/contacts')
  }

}
