import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent {

  constructor(private service : UserService){}

  users! : any

  ngOnInit() : void{
    this.service.getUsesrList().subscribe(users => this.users = users);
  }

}
