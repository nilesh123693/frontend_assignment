import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public userInfo : any;
    public isdesc: any;
    public constructor(private http: HttpClient) {
      this.isdesc = false;
    }
    public ngOnInit(): void {
        const url: string = '/assets/data.json';
        this.http.get(url).subscribe((response) => {
              this.userInfo = response;
        }); 

    }
    sortbyname(property: any) {
      this.isdesc = !this.isdesc;
      let direction  = this.isdesc?1:-1;
       this.userInfo.sort(function(a:string,b:string) {
        if(a[property] < b[property]) {
        return -1* direction;
        }
        
       else if(a[property] > b[property])  {
         return 1* direction;
       }
       else {
        return 0; 
       }
      })
    }
    sortbybirth(property: any) {
       this.isdesc = !this.isdesc;
       let direction = this.isdesc?1:-1;
      this.userInfo.sort(function(a:string, b:string) {
          if(a[property]< b[property]) {
            return 1*direction;
          }
          else if(a[property] > b[property]) {
            return -1*direction;
          }
          else {
            return 0;
          }
      })
    }
}
