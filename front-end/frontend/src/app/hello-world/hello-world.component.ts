import {Component, OnInit} from '@angular/core';
import {HelloWorldService} from "./hello-world.service";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  myName ?: string | null; // cho phép biến null hoặc undefined
  myAddress = 'Hải Dương';
  myCity: string = 'HN';
  myAge: number[] = [1, 2, 3];
  myHobbies !: string; // ko cho phép null hoặc undefined
  inputField ?: string = '';
  numberOne ?: number;
  numberTwo ?: number;
  sum ?: number;

  constructor(private calculatorService: HelloWorldService) {
  }

  ngOnInit(): void {
    this.myCity = 'HD';
    this.myName = null;
    this.myName = 'Tho';
    this.myAge = [1, 2]
  }

  createNumber() {
    console.log("1");
  }

  appendText(s: string): void {
    this.inputField += s;
  }

  alertSum(version: string): void {
    // kiem tra hop le numberOne & numberTwo xem da nhap hay chua
    if (this.numberOne && this.numberTwo) {
      this.getSum(version, this.numberOne, this.numberTwo);
    } else
      alert('Ban nhap thieu thong tin roi kia')
  }

  getSum(version: string, numberOne: number, numberTwo: number): void {

    switch (version) {
      case('V1') : {
        this.calculatorService.getSumV1(numberOne, numberTwo).subscribe({
          next: value => alert(value.body!),
          error: value => alert(value.error())
        });
        break;
      }

      case('V2') : {
        this.calculatorService.getSumV2(numberOne, numberTwo).subscribe({
          next: value => alert(value.body!),
          error: value => alert(value.error())
        });
        break;
      }

      case('V3') : {
        this.calculatorService.getSumV3({
          numberOne :numberOne,
          numberTwo :numberTwo
        }).subscribe({
          next: value => alert(value),
          error: value => alert(value.error())
        });
        break;
      }

      case('V4') : {
        this.calculatorService.getSumV4({
          //truyen vao 1 body
          numberOne: numberOne,
          numberTwo: numberTwo
        }).subscribe({
          next: value => alert(value.body!),
          error: value => alert(value.error())
        });
        break;
      }
    }
  }
}
