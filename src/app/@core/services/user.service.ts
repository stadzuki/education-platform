import {Inject, Injectable} from "@angular/core";
import {IUser} from "../interfaces/user.interface";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {DOCUMENT} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {Api} from "../models/Api.enum";

@Injectable()
export class UserService {
    private readonly baseUrl = this.document.BASE_URL;

    private user: IUser | null = null;
    private user$: BehaviorSubject<IUser | null> = new BehaviorSubject<IUser | null>(null);

    constructor(
        private http: HttpClient,
        @Inject(DOCUMENT) private document: any
    ) {
    }

    isAuthorized() {
        return !!this.user;
    }

    getUser(): Observable<IUser> {
        return this.http.get<IUser>(Api.getUser)
            .pipe(
                tap((response) => {
                    this.user$.next(response);
                    this.user = response;
                })
            );
    }

}
