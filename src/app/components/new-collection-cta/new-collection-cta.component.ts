import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-collection-cta',
  templateUrl: './new-collection-cta.component.html',
  styleUrls: ['./new-collection-cta.component.css']
})
export class NewCollectionCtaComponent implements OnInit {

  bannerImg="https://images.unsplash.com/photo-1522158073024-fb5d4b4ccfdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80"

  constructor() { }

  ngOnInit(): void {
  }

}
