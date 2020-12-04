import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //currentUser$: Observable<User>;
  //It is wrong because TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor. 
  // This assertion is specifically introduced because there are limitations 
  //in strictPropertyInitialization checks and sometimes the compiler gets it wrong
  //A workaround is to add the ! as a postfix to the variable name as below:
  currentUser$!: Observable<User>;

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$;
  }
  login() {
    this.accountService.login(this.model).subscribe(responce => {
      console.log(responce);
    },
      error => { console.log(error) }
    );
  }
  logout() {
    this.accountService.logout();
  }



}
