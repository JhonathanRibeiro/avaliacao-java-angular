import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  public load: Subject<boolean> = this.service.isLoading;

  constructor(private service: LoadingService) { }

  ngOnInit(): void {
  }

}
