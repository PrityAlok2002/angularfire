import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isSignedIn = false
  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')!==null)
    this.isSignedIn = true
    else
    this.isSignedIn = false

  }

  async onSignin(email : string,password : string){
    await this.firebaseService.signIn(email,password)
    if(this.firebaseService.isLoggedIn)
    this.isSignedIn = true
    alert(`Hey ${email} ,you have just logged in`)
  }
  
  handleLogout(){
    this.isSignedIn = false
  }
}
