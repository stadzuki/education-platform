import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserService} from "../../@core/services/user.service";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private userService: UserService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.userService.isAuthorized()) return false;

    return true;
  }
}
