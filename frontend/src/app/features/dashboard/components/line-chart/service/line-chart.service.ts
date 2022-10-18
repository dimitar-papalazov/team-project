import { Injectable } from '@angular/core';

@Injectable()
export class LineChartService {
  private values: number[] = [];
  private valsCopy: number[] = [];
  private maxValue!: number;
  private static xValues: number[] = [20, 55, 90, 125, 160];
  private yValues: number[] = [];
  private hypValues: number[] = [];
  private angleValues: number[] = [];
  private subtitle: string = '';

  constructor() {}

  setData(allData: any[]) {
    this.values = allData;
  }

  maxVal(vals: number[]): number {
    return Math.max(...vals);
  }

  minVal(vals: number[]): number {
    return Math.min(...vals);
  }

  getXValues(): number[] {
    return LineChartService.xValues;
  }

  getValsCopy(): number[] {
    return this.valsCopy;
  }

  getSubtitle(): string {
    return this.values[this.values.length - 1].toString();
  }

  calculateY(): number[] {
    this.yValues = [];
    this.valsCopy = [];
    if (this.minVal(this.values) < 0) {
      let minValue = this.minVal(this.values);
      for (let val of this.values) {
        this.valsCopy.push(val + Math.abs(minValue));
      }

      this.maxValue = this.maxVal(this.valsCopy);
      for (let val of this.valsCopy) {
        this.yValues.push((val / this.maxValue) * 180);
      }
    } else {
      this.valsCopy = this.values;
      this.maxValue = this.maxVal(this.valsCopy);
      for (let val of this.values) {
        this.yValues.push((val / this.maxValue) * 180);
      }
    }

    return this.yValues;
  }

  calculateHyp() {
    this.hypValues = [];
    for (let i = 0; i < this.values.length; i++) {
      if (i == this.values.length - 1) {
        this.hypValues.push(0);
      } else {
        this.hypValues.push(
          Math.sqrt(
            Math.abs(
              (this.yValues[i] - this.yValues[i + 1]) *
                (this.yValues[i] - this.yValues[i + 1])
            ) +
              30 * 30
          )
        );
      }
    }
    return this.hypValues;
  }

  calculateAngles() {
    this.angleValues = [];
    for (let i = 0; i < this.values.length; i++) {
      if (i == this.values.length - 1) {
        this.angleValues.push(0);
      } else {
        if (this.yValues[i] - this.yValues[i + 1] < 0) {
          this.angleValues.push(
            -1 *
              Math.asin(
                Math.abs(this.yValues[i] - this.yValues[i + 1]) /
                  this.hypValues[i]
              ) *
              (180 / Math.PI)
          );
        } else {
          this.angleValues.push(
            Math.asin(
              Math.abs(this.yValues[i] - this.yValues[i + 1]) /
                this.hypValues[i]
            ) *
              (180 / Math.PI)
          );
        }
      }
    }
    return this.angleValues;
  }
}
