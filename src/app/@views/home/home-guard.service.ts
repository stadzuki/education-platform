import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../../@core/services/user.service";

@Injectable()
export class HomeGuardService implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> |  boolean {
    // if (!this.userService.isAuthorized()) {
    //   this.router.navigateByUrl('/auth');
    // }

    return true;
  }
}
