import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScrollEventModule } from 'ngx-scroll-event';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgXCreditCardsModule } from 'ngx-credit-cards';

import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { UserComponent } from '../components/user/user.component';
import { RegisterComponent } from '../components/register/register.component';
import { BookComponent } from '../components/book/book.component';
import { environment } from '../environments/environment';
import { AuthService } from '../components/core/auth.service';
import { UserService } from '../components/core/user.service';
import { UserResolver } from '../components/user/user.resolver';
import { AuthGuard } from '../components/core/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BookResolver } from '../components/book/book.resolver';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { BookDetailsComponent } from '../components/book.details/book.details.component';
import { CartComponent } from '../components/cart/cart.component';
import { CartResolver } from '../components/cart/cart.resolver';
import { CartService } from '../components/core/cart.service';
import { CardNumValidDirective } from './card-num-valid.directive';
import { CardExpDateValidDirective } from './card-exp-date-valid.directive';
import { CardCvcValidDirective } from './card-cvv-valid.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    BookComponent,
    BookDetailsComponent,
    NavbarComponent,
    BookComponent,
    CartComponent,
    CardNumValidDirective,
    CardExpDateValidDirective,
    CardCvcValidDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    ScrollEventModule,
	  BrowserAnimationsModule,
    MaterialModule,
    NgXCreditCardsModule
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard, BookResolver, CartComponent, CartService, CartResolver, UserComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
