import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthGuard {

    constructor( private authService: AuthService, private router: Router ){}
    
    canActivate(): boolean {
        return this.checkAuth();
    }


    private checkAuth(): boolean {
        if( this.authService.isAuthenticatedUser() ){
            return true
        } else {
            // Redirect to the login page if the user is not authenticated
            this.router.navigateByUrl('/login')
            return false
        }

    }

}