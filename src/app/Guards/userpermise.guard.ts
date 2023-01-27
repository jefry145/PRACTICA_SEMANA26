import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserpermiseGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var UserData =  JSON.stringify(localStorage.getItem("UserLogin"))
      var DataUserLogin = JSON.parse(JSON.parse(UserData))

      // console.log(DataUserLogin)
      // console.log(DataUserLogin.user)
      
      if(DataUserLogin.user === "" && DataUserLogin.pass === ""){
        alert("Tienes que Iniciar Sesion antes de ir al home")
        return false;
      }else{
        return true;
      }
    
  }
  
}
