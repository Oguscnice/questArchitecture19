import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-random',
  templateUrl: './user-random.component.html',
  styleUrls: ['./user-random.component.css']
})
export class UserRandomComponent {
  @Input() userRandom! : any
  ngOnInit() : void{
    console.log(this.userRandom);
    
  }
}
