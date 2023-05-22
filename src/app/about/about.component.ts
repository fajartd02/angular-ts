import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  userData: any;
  searchQuery: any;
  userSearch: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://dummyjson.com/users/1').subscribe((data) => {
      this.userData = data;
    });
  }

  search(): void {
    if (this.searchQuery) {
      const url = `https://dummyjson.com/users/search?q=${encodeURIComponent(this.searchQuery)}`;
      this.http.get(url).subscribe((data: any) => {
        this.userSearch = data.users;
        console.log(this.userSearch);
      });
    }
  }
}
