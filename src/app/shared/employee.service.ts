import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  formData: Employee;
  user: User;

  constructor(private firestore: AngularFirestore) { }

  getEmployees() {
    return this.firestore.collection('employees').snapshotChanges();
  }
}
