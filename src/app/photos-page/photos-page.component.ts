import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-photos-page",
  templateUrl: "./photos-page.component.html",
  styleUrls: ["./photos-page.component.css"]
})
export class PhotosPageComponent implements OnInit {
  url1 = "";
  url2 = "";
  url3 = "";
  constructor() {}

  ngOnInit() {
    this.url1 = "assets/url1.jpg";
    this.url2 = "assets/url2.JPG";
    this.url3 = "assets/url3.JPG";
  }
}
