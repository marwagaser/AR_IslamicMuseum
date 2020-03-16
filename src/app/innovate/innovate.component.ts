import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-innovate",
  templateUrl: "./innovate.component.html",
  styleUrls: ["./innovate.component.css"]
})
export class InnovateComponent implements OnInit {
  img_inprogress = "";
  constructor() {}

  ngOnInit() {
    this.img_inprogress = "assets/innovate-page.png";
  }
}
