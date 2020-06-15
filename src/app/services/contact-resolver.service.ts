import { Injectable } from '@angular/core';
import { ContactService } from './contact.service';
import { Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ContactResolverService {

  constructor(private contactService: ContactService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.params.id
    if (!id) return false;
    const contact$ = this.contactService.getContactById(id)
    contact$.subscribe()

    if (contact$) return contact$
    this.router.navigateByUrl('/contacts')
    return false
  }
}
