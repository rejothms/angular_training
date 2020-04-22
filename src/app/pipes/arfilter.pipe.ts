import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arfilter'
})
export class ArfilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    console.log(args  );

    let filteredArray = value.filter(item=> {
      return item.count < args[0];
    })

    return filteredArray;
  }

}
