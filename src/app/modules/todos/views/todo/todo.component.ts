import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  routeSubscription: Subscription;
  id: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.routeSubscription = this.route.paramMap.subscribe(
      (params: ParamMap) => {
        this.id = params.get('id');
      }
    );
  }
}
