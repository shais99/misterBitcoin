import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'contacts' },
  {
    path: 'contacts', canActivate: [AuthGuard], children: [
      { path: 'edit', resolve: { contact: ContactResolverService }, component: ContactEditComponent },
      { path: 'edit/:id', resolve: { contact: ContactResolverService }, component: ContactEditComponent },
      { path: ':id', pathMatch: 'full', resolve: { contact: ContactResolverService }, component: ContactDetailsPageComponent },
      { path: '', pathMatch: 'full', component: ContactPageComponent }
    ]
  },
  { path: 'signup', pathMatch: 'full', component: SignupPageComponent },
  { path: 'statistics', canActivate: [AuthGuard], component: StatisticPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
