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
    response.forEach(x => {

      let date = new Date(x.date)

      let day = date.getDate() < 10 ? '0'+ date.getDate() : date.getDate();
      let month = date.getMonth() + 1 < 10 ? '0'+ (date.getMonth() + 1) : date.getMonth() + 1;
      let year = date.getFullYear()
      let hour = date.getHours() < 10 ? '0'+ date.getHours() : date.getHours();
      let minutes = date.getMinutes() < 10 ? '0'+ date.getMinutes() : date.getMinutes();
      let seconds = date.getSeconds() < 10 ? '0'+ date.getSeconds() : date.getSeconds();
      
      x.formatDate = day +'/'+ month +'/'+ year + '  ' + hour+':'+minutes+':'+seconds;
    });
    this.data = response;
  }
  errorResult(error){
    alert('Error');
  }
  completeResult(){ 
    var ctrl = this; 
    setTimeout(function(){
      ctrl.getData();
    }, 500000); 
    console.log("the data request is completed")
  }

}
