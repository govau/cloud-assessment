import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-footer',
  template: `
    <footer>
      site footer
    </footer>
  `,
  styleUrls: ['./site-footer.component.scss']
})
export class SiteFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
