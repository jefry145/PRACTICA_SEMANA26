import { FormBuilder,  FormGroup , Validators , } from '@angular/forms';
import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

constructor(public data:DataService,
            private formBuilder:FormBuilder,
            private routes:Router,
            private _snackbar:MatSnackBar){
}


public formLogin!:FormGroup;

ngOnInit():void{
 this.formLogin = this.formBuilder.group({
     user:["",[ Validators.minLength(3) , Validators.required]],
     pass:["",[Validators.minLength(3) , Validators.required]],
 });

 this.data.getdata().subscribe(x=>this.datos=x)
}


datos!:any[];

enviar(){
  console.log(this.datos)
  // console.log(this.formLogin.value)

  for (let i = 0; i< this.datos.length; i++) {
          if (this.datos[i].username === this.formLogin.value.user && this.datos[i].email === this.formLogin.value.pass) {

            console.log("Aqui hay uno")

            localStorage.setItem("UserLogin",JSON.stringify(this.formLogin.value))
            this.routes.navigate([`/home/${this.datos[i].id}`])
            this._snackbar.open(`Bienvenid@ ${this.formLogin.value.user}`,"hecho");
            break

          }else{
            this._snackbar.open(`Usuario ${this.formLogin.value.user} no existe, verifique sus datos`,"hecho");
            console.log("Aqui no hay uno")
          }
      }
}
}
