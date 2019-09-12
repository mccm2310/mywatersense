import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  data: any;

  constructor(private requestService : RequestService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.requestService.getSensorData().subscribe(
      response => this.successResult(response),
      error => this.errorResult(error),
      () => this.completeResult(),
    )
  }
  
  successResult(response){
    this.data = response;
  }
  errorResult(error){
    alert('Error');
  }
  completeResult(){   
    console.log("the data request is completed")
  }

}
