import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-main',
  templateUrl: './sidenav-main.component.html',
  styleUrls: ['./sidenav-main.component.scss']
})
export class SidenavMainComponent implements OnInit {
  public isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleSlideMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }

}
