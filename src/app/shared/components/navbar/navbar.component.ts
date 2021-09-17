import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() id: string | undefined;
  @Input() identicon: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
