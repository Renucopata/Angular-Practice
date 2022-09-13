import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {

    this.router.params.subscribe((p) => console.log("Params:" , p));

    console.log('Snapshot: ', this.router.snapshot.params);
  }

}