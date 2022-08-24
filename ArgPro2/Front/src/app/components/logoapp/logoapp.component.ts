import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoapp',
  templateUrl: './logoapp.component.html',
  styleUrls: ['./logoapp.component.css']
})
export class LogoappComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.router.navigate(['/login'])
  }
}
