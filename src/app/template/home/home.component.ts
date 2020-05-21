import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef} from '@angular/core';
import { ApiService } from '../../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatTableDataSource,MatPaginator } from '@angular/material';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DailogComponent } from '../dialog.component';
declare var require: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator, {static:false}) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<any> = null;
  selectForm:FormGroup;
  countries:Array<any>;
  categories:Array<any>;
  
  loremContent:string="Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
  imgNotFound=require("../../../assets/default-image/image-not-found.png");
  errorMsg:string;
  showPagination: boolean=false;
  length:number;

  constructor(private api:ApiService, private fb:FormBuilder,private changeDetectorRef: ChangeDetectorRef,
    private router:Router,public dialog: MatDialog) {
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
    });
  }
  
  submit() {
    this.errorMsg="";
    console.log(this.selectForm.value);
    this.api.getNews(this.selectForm.value).subscribe(res => {
      console.log(res);
      if(res['status']=="200") {
        this.showPagination = true;
        this.dataSource = new MatTableDataSource<any>(res['articles']); 
        this.length = res['articles'].length;
        this.changeDetectorRef.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.obs = this.dataSource.connect();
      }      
    }, error => {
      this.errorMsg = error.error;
      this.openDialog();
    })
  }
  
  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }

  contentRead(url) {   
      window.open(url);
  }

  openDialog() {
    this.dialog.open(DailogComponent);
  }
}
