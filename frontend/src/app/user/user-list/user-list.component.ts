import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {UserService} from "../user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  private users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() { //when component loading get all users and set the users[]
    this.getAllUsers();
  }

  getAllUsers(): any {
    // throw new Error("Method not implemented.");
    this.userService.findAll().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }

    )
  }


  redirectNewUserPage() {
    this.router.navigate(['/user/create']);
  }

  editUserPage(user: User) {
    if (user) {
      this.router.navigate(['/user/edit', user.id]);
    }
  }

  deleteUser(user: User) {
    console.log('Delete User');
  }


}
