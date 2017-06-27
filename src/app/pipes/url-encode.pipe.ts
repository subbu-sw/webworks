import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlEncode'
})
export class UrlEncodePipe implements PipeTransform {

  transform(value: string): string {
    // console.log('urlEncode pipe received value='+value)
    return encodeURIComponent(value);
  }

}
