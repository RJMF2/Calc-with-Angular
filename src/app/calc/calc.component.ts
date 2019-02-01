import { Component, OnInit } from '@angular/core';
import {HistoryService} from '../history.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private historyData:HistoryService) { }
  buttons: object[] = [
    { value: '7', class: 'btn number' },
    { value: '8', class: 'btn number' },
    { value: '9', class: 'btn number' },
    { value: '*', class: 'btn op' },
    { value: '4', class: 'btn number' },
    { value: '5', class: 'btn number' },
    { value: '6', class: 'btn number' },
    { value: '/', class: 'btn op' },
    { value: '1', class: 'btn number' },
    { value: '2', class: 'btn number' },
    { value: '3', class: 'btn number' },
    { value: '-', class: 'btn op' },
    { value: '0', class: 'btn number' },
    { value: '.', class: 'btn number' },
    // { value:'=' ,class:'btn eq'},
    // { value:'+' ,class:'btn op'}
  ];
  history:any = [];
  operation = "";
  result = "";
  err = "";
  res() {
    if (this.operation === "") {
      this.err = "the field is empity";
    }
    else {
      this.result = eval(this.operation);
      this.history.push(this.operation + "=" + this.result);
      this.historyData.postData(this.history).subscribe(
        (data) => console.log (data),
        (error) => console.log(error)
      )
    }
  }
  add(value) {
    this.operation += value;
  }
  clear() {
    this.operation = this.operation.slice(0, this.operation.length - 1);
  }
  clearAll() {
    this.operation = "";
    this.result = "";
  }

  ngOnInit() {
    this.historyData.getData().subscribe(
      (data) => this.history.push(data.toString())
    );
  }

}
