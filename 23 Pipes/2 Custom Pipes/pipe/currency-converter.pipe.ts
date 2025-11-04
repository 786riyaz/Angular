import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyConverter'
})
export class CurrencyConverterPipe implements PipeTransform {
  private currencyPipe = new CurrencyPipe('en-US'); // ✅ create an instance manually

  transform(value: number, rate: number = 85, currencyCode: string = 'USD'): string {
    // console.log(value, "---", rate);
    const converted = value / rate;
    return this.currencyPipe.transform(converted, currencyCode, 'symbol', '1.2-2') || '';
  }
}
