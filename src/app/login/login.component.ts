import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: EmployeeService,
    private firestore: AngularFirestore,
    private toastr: ToastrService,
    private routes: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.user = {
      id: null,
      fullName: '',
      password: '',
    }
  }
    onLogin(form: NgForm) {
    let data = Object.assign({}, form.value);
    delete data.id;
    
    if(data.username == 'admin' && data.password == 'admin'){
     this.routes.navigate(["/employees"]);
    }else {
      alert("Invalid credentials");
      this.routes.navigate(["/home"]);
    }
}




}




// if(data.fullName=='agnes' && data.password=='123')
  //{
  //   this.routes.navigate([ '/employees' ]);
 // }
 // else
  //{
    // this.routes.navigate([ '/error' ]);
 // }