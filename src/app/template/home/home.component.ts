import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectForm:FormGroup;
  countries:Array<any>;
  categories:Array<any>;
  constructor(private api:ApiService, private fb:FormBuilder) {
    this.countries = [
      {"name":"USA", "value":"us"},
      {"name":"India", "value":"in"},
      {"name":"Germany", "value":"de"},
      {"name":"Australia", "value":"au"}
    ];
    this.categories = [      
      {"cname":"Health", "value":"health"},
      {"cname":"Sports", "value":"sports"},
      {"cname":"General", "value":"general"},
      {"cname":"Science", "value":"science"},
      {"cname":"Business", "value":"business"},
      {"cname":"Technology", "value":"technology"},      
      {"cname":"Entertainment", "value":"entertainment"}
    ];
   }

  ngOnInit() { 
    this.selectForm = this.fb.group({
      'country': [null, Validators.required],
      'category': [null, Validators.required]
    })
  }

  submit() {
    console.log(this.selectForm.value);
    this.api.getNews(this.selectForm.value).subscribe(data => {
      console.log(data);
    })
  }

}
