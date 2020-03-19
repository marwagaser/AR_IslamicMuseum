import { Component, OnInit } from "@angular/core";
import { NgAnimateScrollService } from "ng-animate-scroll";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  imgurl = "assets/3d.png";

  constructor(private animateScrollService: NgAnimateScrollService) {}
  ngOnInit() {}

  scroll(id: string) {
    this.animateScrollService.scrollToElement(id, 1000);
  }
}
