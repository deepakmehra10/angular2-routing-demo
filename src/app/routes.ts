import {ProductComponent} from './product.component';
import {ProductDetailComponent} from './product-detail.component';

import {InventoryComponent} from './inventory.component';
import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './pagenotfound.component';
import {TestComponent} from './test.component';
import {CreateUserComponent} from './create-user.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {ServiceComponent} from './service.component';
import {ContactComponent} from './contact.component';
import {ProductGuardService} from './product-guard.service';
import {OverviewComponent} from './overview.component';
import {SpecificationComponent} from './Specification.component';
import {QueryComponent} from './query.component';
import {ChatComponent} from './chat.component';
export const appRoutes: Routes = [
  { path: 'chat', component: ChatComponent, outlet: 'sidebar' },
  { path: 'query', component: QueryComponent}, // query param route
  { path: 'product', component: ProductComponent}, // product route
  { path: 'product/:id', canActivate: [ProductGuardService], component: ProductDetailComponent,
    children: [
      {path: '', redirectTo: 'overview', pathMatch: 'full'},
      {path: 'overview', component: OverviewComponent},
      {path: 'specs', component: SpecificationComponent}
    ]
  }, // product route
  { path: 'inventory', component: InventoryComponent}, // inventory route
  { path: 'test', component: TestComponent}, // testing route
  { path: 'home', component: HomeComponent}, // home route
  { path: 'about', component: AboutComponent}, // about route
  { path: 'service', component: ServiceComponent}, // service route
  { path: 'contact', component: ContactComponent}, // contact route
  { path: 'user/new', component: CreateUserComponent,
    canDeactivate: ['canDeactivateCreateUser']}, // create new user route
  {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  { path: '', redirectTo: '/product', pathMatch: 'full'}, // default route
  { path: '**', component: PageNotFoundComponent} // error route handler
]
