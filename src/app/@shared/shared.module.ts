import {NgModule} from "@angular/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import { EpLoaderComponent } from './ep-loader/ep-loader.component';

const sharedComponents: Array<any> = [
  EpLoaderComponent
];

const sharedModules: Array<any> = [
  MatSidenavModule
];

@NgModule({
  declarations: [...sharedComponents],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents]
})
export class SharedModule {}
