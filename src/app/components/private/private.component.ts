import { Component, OnInit } from "@angular/core";
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: "app-private",
  templateUrl: "./private.component.html",
  styleUrls: ["./private.component.scss"],
})
export class PrivateComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit(): void {}
}
