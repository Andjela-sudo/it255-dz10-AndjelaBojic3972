import { Component } from '@angular/core';
import { SpacexService } from './services/spacex.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it255-dz10-AndjelaBojic3972';
  public rocketIds : any;
  public rocket:any;
  public selectedId: any;

  constructor(private spacexService: SpacexService){
    this.spacexService.getAllRockets().subscribe((data)=>{
      
      this.rocketIds = (<Array<string>>data).map((item: any)=>item.id);
      console.log(this.rocketIds);
    });
  }
  

  onRocketIdChange(event:any){
    console.log(event.target.value);
    this.selectedId = event.target.value;
    // this.spacexService.getRocketById(event.target.value).subscribe((data)=>{
      
    //   this.rocket = data
    //   console.log(this.rocket);
    // });
    
  }
}
