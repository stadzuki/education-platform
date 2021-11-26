import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing";
import {CommonModule} from "@angular/common";
import {CardComponent} from "../card/card.component";

@NgModule({
    declarations: [
        HomeComponent,
        CardComponent
    ],
  entryComponents: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule
  ]
})
export class HomeModule {}
