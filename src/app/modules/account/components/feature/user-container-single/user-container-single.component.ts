import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-container-single',
  templateUrl: './user-container-single.component.html',
  styleUrls: ['./user-container-single.component.css']
})
export class UserContainerSingleComponent {
  constructor(private service: UserService) {}

  usersList! : any
  userRandom!: any;

  ngOnInit(): void {
    this.service.getUsesrList().subscribe((usersList) => {

      let number = Math.floor(Math.random() * 5) +1;
      this.usersList = usersList

      for (let user of this.usersList) {
        if (user.id == number) {
          this.userRandom = user;
        }
      }

    });
  }
}
