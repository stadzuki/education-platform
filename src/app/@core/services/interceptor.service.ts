import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {Observable, map, catchError} from "rxjs";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorizationToken = this.cookieService.get('authorization');
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authorizationToken),
    })

    return next.handle(authReq)
      .pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {

          }
          return event;
        }),
        catchError((err: any) => {
          if (err instanceof HttpErrorResponse && err.status == 401) {
            this.router.navigateByUrl('/auth');
          }
          throw err;
        })
      );
  }
}
