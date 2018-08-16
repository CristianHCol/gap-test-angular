import {Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'currencyformat'})
export class CurrencyFormatPipe implements PipeTransform {
    transform(value: number,
        currencySign: string = '$ ',
        decimalLength: number = 2,
        chunkDelimiter: string = '.',
        decimalDelimiter:string = ',',
        chunkLength: number = 3): string {
        value = Math.round( value * 100 ) / 100;
        const result = '\\d(?=(\\d{' + chunkLength + '})+' + (decimalLength > 0 ? '\\D' : '$') + ')'
        let num = value.toFixed(Math.max(0, ~~decimalLength));
        return currencySign+(decimalDelimiter ? num.replace('.', decimalDelimiter) : num)
        .replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
    }
}
