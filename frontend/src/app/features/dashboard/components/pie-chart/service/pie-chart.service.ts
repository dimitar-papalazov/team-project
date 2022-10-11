import { Injectable } from '@angular/core';

@Injectable()
export class PieChartService {
  private data: any = {};

  private colorsPalette: string[] = [];

  constructor() {}

  setData(allData: any[]) {
    this.data = allData;
  }

  setColorsPalette(colors: string[]) {
    this.colorsPalette = [];
    this.colorsPalette = colors;
  }

  getData(): any[] {
    return this.data;
  }

  getColors(): string[] {
    return this.colorsPalette;
  }

  getTitle(): string {
    return this.data.title;
  }

  parts(): string {
    let background: string = 'background-image: conic-gradient(';

    this.data.forEach((value, i) => {
      if (i == 0) {
        background +=
          this.colorsPalette[i] + ' ' + this.calculatePercentage(i) + '%, ';
      } else if (i == this.data.length - 1) {
        background +=
          this.colorsPalette[i] + ' ' + this.calculatePercentage(i - 1) + '%';
      } else {
        background +=
          this.colorsPalette[i] +
          ' ' +
          this.calculatePercentage(i - 1) +
          '% ' +
          this.calculatePercentage(i) +
          '%, ';
      }
    });

    background += ');';
    console.log(background);
    return background;
  }

  grid(): string {
    return 'grid-template-columns: repeat(' + this.data.length + ', auto);';
  }

  calculatePercentage(counter: number) {
    let total: number = 0;
    for (let i = 0; i <= counter; i++) {
      total += this.data[i].value;
    }
    return total;
  }
}
