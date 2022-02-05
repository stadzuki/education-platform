import {NgModule} from "@angular/core";
import {UserService} from "./services/user.service";
import {CommonModule} from "@angular/common";
import {CookieService} from "ngx-cookie-service";
import {HttpClientModule} from "@angular/common/http";

const coreComponents: Array<any> = [

];

const coreProviders: Array<any> = [
  UserService,
  CookieService
];

@NgModule({
  declarations: [...coreComponents],
  imports: [CommonModule, HttpClientModule],
  providers: [...coreProviders],
  exports: []
})
export class CoreModule {}
