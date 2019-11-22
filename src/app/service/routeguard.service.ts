import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HardCodedAuthService } from './hard-coded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {
  constructor(private hardCodedAuth: HardCodedAuthService) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardCodedAuth.isUserLoggedIn())
      return true;

    return false;

  }



}
