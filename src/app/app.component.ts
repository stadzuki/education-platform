import {Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "./@core/services/user.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(
        private elementRef: ElementRef,
        private activatedRoute: ActivatedRoute,
        private userService: UserService,
        private router: Router
    ) {
        this.elementRef.nativeElement.dataset.theme = 'light'
    }

    ngOnInit(): void {
        // this.userService.getUser()
        //     .subscribe((response) => {
        //
        //     }, (error) => {
        //         this.router.navigateByUrl('/auth')
        //     })
    }

    changeThemePage() {
        if (this.elementRef.nativeElement.dataset.theme === 'dark') {
            this.elementRef.nativeElement.dataset.theme = 'light'
        } else if (this.elementRef.nativeElement.dataset.theme === 'light') {
            this.elementRef.nativeElement.dataset.theme = 'dark'
        }
    }

    isRouteHiddenSideNav(): boolean {
        for (const child of this.activatedRoute.children) {
            if (child.snapshot.data.hasOwnProperty('hideSideNav')) {
                return true;
            }
        }
        return false;
    }

}
