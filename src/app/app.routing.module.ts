import { NgModule } from "@angular/core";
import { Routes , RouterModule } from "@angular/router";
import { UserpermiseGuard } from "./Guards/userpermise.guard";
import { HomeComponent } from "./pages/home/home.component";
import { PageinitComponent } from "./pages/pageinit/pageinit.component";
import { LoginComponent } from "./pageschildren/login/login.component";

const routes:Routes=[
    {path:"home/:id" , component : HomeComponent , canActivate:[UserpermiseGuard]},
    {path:"pageinit" , component : PageinitComponent ,
     children:[
        {path:"login" , component : LoginComponent}
     ]},
    {path:'', pathMatch:'full', redirectTo:'/pageinit'},
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}