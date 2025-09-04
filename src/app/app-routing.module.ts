import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PodcastComponent } from './podcast/podcast.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeaturesComponent } from './features/features.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'features', component: FeaturesComponent },
  // { path: 'clients', component: ClientsComponent },
  { path: 'podcast', component: PodcastComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: ContactComponent },

  // default route
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // wildcard (for 404)
  // { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
