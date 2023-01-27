import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  criterio!:number

  Userdata!:any[]

  panelOpenState = false;
  //Valores
  User:any
  Username:any
  id:any
  phone:any
  email:any
  city:any
  street:any

  constructor(private rutaActiva: ActivatedRoute ,
                   private data : DataService,
                   private routes : Router,
                   private _snackbar : MatSnackBar){}

      ngOnInit():void{

        this.data.getdata().subscribe(x=>this.Userdata=x)

        this.rutaActiva.paramMap.subscribe(
          (paramMap: any) => {
            const{params} = paramMap
            this.criterio = params.id
          }
        );
      }           

      ngAfterViewChecked(){
        var UserdataDetails = this.Userdata.filter((element: { id: number; }) => element.id == this.criterio)
        this.User = UserdataDetails[0].name
        this.Username = UserdataDetails[0].username
        this.email = UserdataDetails[0].email
        this.id= UserdataDetails[0].id
        this.phone = UserdataDetails[0].phone
        this.city = UserdataDetails[0].address.city
        this.street = UserdataDetails[0].address.street
      
      }

      logout(){
       localStorage.removeItem("UserLogin")
       this.routes.navigate(["/pageinit"])
       this._snackbar.open(`Hasta pronto ${this.User}` , "hecho")
      }
}
