import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'datePipe'
})
export class DatePipePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return moment(date).format('DD/MM/YYYY');
  }

}