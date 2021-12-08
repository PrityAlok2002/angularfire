import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirebaseService } from '../shared/firebase.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
 
  @Output() isLogout = new EventEmitter<void>()

  constructor(public firebaseService : FirebaseService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
}
