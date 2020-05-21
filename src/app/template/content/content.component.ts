import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  paramValue:any;
  errorMsg:any;
  dataSource: any;

  constructor(private route: ActivatedRoute, private api:ApiService) {
    this.route.queryParams.subscribe(params => {
      this.paramValue = params['value'];
    });
  }

  ngOnInit() { this.getContent(this.paramValue); }

  getContent(value) {
    this.api.getContentByName(value).subscribe(res => {
      console.log(res);
        if(res['status']=="200") {
          this.dataSource = res['articles']; 
        }            
    }, error => {
      this.errorMsg = error.error;
  })
  }

}
