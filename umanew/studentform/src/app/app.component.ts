import { Component } from '@angular/core';
import { FormGroup, FormControl, NgForm} from '@angular/forms';
import { Service1Service } from './service-1.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private serv:Service1Service){}
  title = 'studentform';
  mygroup = new FormGroup({

  })
  validate(details:NgForm){
    console.log(details.value);

    this.serv.adddetails(details.value).subscribe((response) => {
      console.log(response);
    });

    
  }
}
