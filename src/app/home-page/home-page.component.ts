import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  card1Front = "";
  card1Back = "";
  card2Front = "";
  card2Back = "";
  card3Front = "";
  card3Back = "";

  //img1URL = "IMG_5410.JPG";
  constructor() {}

  ngOnInit() {
    this.card1Front = "What's it about?";
    this.card1Back =
      "In an attempt to make the knowledge delivery interactive, attract more tourist, and replace the actual tour guide, this Augmented Reality (AR) application was created to act as a tour guide for individual tourists in the Museum of Islamic Arts in Cairo.";
    this.card2Front = "Technology used";
    this.card2Back =
      "Unity and Vuforia were used to develop the application for Android platform";
    this.card3Front = "Meet the developer";
    this.card3Back =
      "Hey! I'm Marwa, a Computer Science and Engineering student at the German University in Cairo. This Augmented Reality application was developed as part of my bachelor thesis work.";
  }
}
