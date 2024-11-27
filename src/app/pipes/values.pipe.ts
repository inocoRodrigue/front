import { Pipe, PipeTransform } from '@angular/core';
import { Partner } from '../models/Partner';

@Pipe({
  name: 'values',
  standalone: true,
})
export class ValuesPipe implements PipeTransform {
  transform(value: Partner | undefined, ...args: unknown[]): String[] {
    return value === undefined ? [] : Object.values(value);
  }
}
