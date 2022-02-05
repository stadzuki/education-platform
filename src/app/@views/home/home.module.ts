import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {HomeRoutingModule} from "./home-routing";
import {CardComponent} from "../subject-card/card.component";

@NgModule({
  declarations: [
      HomeComponent,
      CardComponent
  ],
  imports: [HomeRoutingModule]
})
export class HomeModule {}
