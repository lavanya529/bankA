import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { DepositeComponent } from './deposite/deposite.component';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { from } from 'rxjs';
import { CustomepipePipe } from './customepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    WithdrawalComponent,
    DepositeComponent,
    FundTransferComponent,
    CustomepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
