import {Routes, RouterModule} from '@angular/router';
import {NgModule} from "@angular/core";
import {AuthGuardService} from "./@views/auth/auth-guard.service";
import {HomeGuardService} from "./@views/home/home-guard.service";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        canActivate: [HomeGuardService],
        loadChildren: () => import('./@views/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'auth',
        data: {hideSideNav: true},
        canActivate: [AuthGuardService],
        loadChildren: () => import('./@views/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'lectures',
        loadChildren: () => import('./@views/lectures/lectures.module').then((m) => m.LecturesModule)
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [HomeGuardService, AuthGuardService]
})
export class AppRoutingModule {
}
