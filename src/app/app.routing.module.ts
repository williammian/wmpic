import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { AuthGuard } from "./core/auth/auth.guard";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user/:userName',
    component: PhotoListComponent,
    resolve: { photos: PhotoListResolver }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true } )
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
