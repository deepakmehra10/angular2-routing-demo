import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {
HomeComponent,
  AboutComponent,
  ServiceComponent,
  ContactComponent
} from './index';


import {AppComponent} from './app.component';
import {InventoryComponent} from './inventory.component';
import {ProductComponent} from './product.component';
import {ProductDetailComponent} from './product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {appRoutes} from './routes';
import {PageNotFoundComponent} from './pagenotfound.component';
import {TestComponent} from './test.component';
import {CreateUserComponent} from './create-user.component';
import {ProductGuardService} from './product-guard.service';
import {SpecificationComponent} from './Specification.component';
import {OverviewComponent} from './overview.component';
import {QueryComponent} from './query.component';
import {ChatComponent} from './chat.component';
/*
export const appRoutes: Routes = [
  { path: 'product', component: ProductComponent}, // product route
  { path: 'inventory', component: InventoryComponent}, // inventory route
  { path: '', redirectTo: '/product', pathMatch: 'full'} // default route
]
*/

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    ProductComponent,
    PageNotFoundComponent,
    TestComponent,
    CreateUserComponent,
    HomeComponent,
    ContactComponent,
    ServiceComponent,
    AboutComponent,
    ProductDetailComponent,
    SpecificationComponent,
    OverviewComponent,
    QueryComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {
      provide: 'canDeactivateCreateUser', useValue: checkDirtyState
    }, ProductGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateUserComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved your work, Dou you really want to cancel?');
  }
  return true;
}
