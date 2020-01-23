import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  paragraph = "";
  slogan = "";
  collab = "";
  img1URL = "IMG_5410.JPG";
  constructor() {}

  ngOnInit() {
    this.paragraph =
      "Augmented Reality for the Islamic Museum of Arts in Cairo";
    this.slogan = "For a magnificent museum experience";
    this.collab = "AR X Museum of Islamic Art";
  }
}
