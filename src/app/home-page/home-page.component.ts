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
      "Islamic history contributes to the history of Egypt, generally. However, compared to the Museum of Egyptian Antiquities, the Islamic artifacts are abstract, and not figurative which makes it hard for tourists to understand the history behind the piece. Therefore, in an attempt to make the knowledge delivery interactive, attract more tourist, and replace the actual tour guide, this Augmented Reality (AR) application was created to act as a tour guide for individual tourists.";
    this.card2Front = "Technology used";
    this.card2Back =
      "Unity and Vuforia were used to develop the application for Android platform";
    this.card3Front = "Meet the developer";
    this.card3Back =
      "Hey! I'm Marwa, a Computer Science and Engineering student at the German University in Cairo. This Augemented Reality application was developed as part of my bachelor thesis work.";
  }
}
