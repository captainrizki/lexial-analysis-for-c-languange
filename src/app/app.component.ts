import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  isDelimiter,
  isInteger,
  isKeyword,
  isOperator,
  isRealNumber,
  subsString,
  validIdentifier,
} from './helper/analyzer-function';
import { fadeInAnimation, titleAnimation } from './animation/my-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeInAnimation, titleAnimation],
})
export class AppComponent implements OnInit {
  @ViewChild('result') result!: ElementRef;
  title: string = 'rizki';
  inputCode: string = 'int a = 1 + 1;';
  isClose: boolean = false;
  isFirstAnimation = false;
  isFirstResult: boolean = false;
  isLoading: boolean = false;
  results: {
    analysis: string;
    description: string;
  }[] = [];
  constructor() {}

  ngOnInit(): void {
    void setTimeout(() => {
      this.isFirstAnimation = true;
    }, 2000);
  }

  analysisCode() {
    this.isClose = false;
    this.isFirstResult = false;
    this.isLoading = true;
    this.result.nativeElement.classList.remove('animate__backInLeft');

    void setTimeout(() => {
      void setTimeout(() => {
        this.isFirstResult = true;
      }, 1000);
      this.isClose = true;
      this.results = [];
      this.isLoading = false;

      this.result.nativeElement.classList.add('animate__backInLeft');
      const inputCode = this.inputCode.replace(/\n/g, ' ');
      let right = 0;
      let left = 0;
      let lenInput = this.inputCode.length;

      while (right <= lenInput && left <= right) {
        if (isDelimiter(inputCode[right]) == false) right++;
        if (isDelimiter(inputCode[right]) == true && left == right) {
          if (isOperator(inputCode[right]) == true) {
            this.results.push({
              analysis: inputCode[right],
              description: 'Is An Operator',
            });
          }
          right++;
          left = right;
        } else if (
          (isDelimiter(inputCode[right]) == true && left != right) ||
          (right == lenInput && left != right)
        ) {
          const subStr = subsString(inputCode, left, right);
          if (isKeyword(subStr) == true)
            this.results.push({
              analysis: subStr,
              description: 'Is An Keyword',
            });
          else if (isInteger(subStr) == true)
            this.results.push({
              analysis: subStr,
              description: 'Is An Integer',
            });
          else if (isRealNumber(subStr) == true)
            this.results.push({
              analysis: subStr,
              description: 'Is An Real Number',
            });
          else if (validIdentifier(subStr) == true)
            this.results.push({
              analysis: subStr,
              description: 'Is A Valid Indentifier',
            });
          else if (validIdentifier(subStr) == false)
            this.results.push({
              analysis: subStr,
              description: 'Is Not A Valid Indentifier',
            });
          left = right;
        }
      }
    }, 3000);
  }
}
