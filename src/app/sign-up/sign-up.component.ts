import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  isSignedIn = false
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  async onSignup(email:string,password:string){


    await this.firebaseService.signUp(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    alert(`${email} ,REGISTERED SUCCESSFULLY`)
  }
}
