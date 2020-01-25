import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-idea-page",
  templateUrl: "./idea-page.component.html",
  styleUrls: ["./idea-page.component.css"]
})
export class IdeaPageComponent implements OnInit {
  videoURL = "https://www.youtube.com/embed/Ri4RNVD3ifI";
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}
  fetchURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      "https://www.youtube.com/embed/Ri4RNVD3ifI"
    );
  }
}
