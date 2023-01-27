import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pageinit',
  templateUrl: './pageinit.component.html',
  styleUrls: ['./pageinit.component.css']
})
export class PageinitComponent {

  constructor(
    private routes:Router
  ){}
 ngOnInit(){
    this.routes.navigate(["/pageinit/login"])
 }
}
