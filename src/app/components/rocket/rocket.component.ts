import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpacexService } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {
  public rocket: any;
  public id:any;

  constructor(private spacexService: SpacexService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') + "";
      this.spacexService.getRocketById(this.id).subscribe((data) => {
        this.rocket = data
        console.log(this.rocket);
      });
    })
    console.log('constructor');
    

  }

  ngOnInit(): void {
  }

  

}
