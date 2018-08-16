import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterDataVyText' })
export class FilterDataPipe implements PipeTransform {
  transform(json: any[], args: any[]): any[] {
    const searchText = args[0];
    const jsonKey = args[1];

    // json = undefined, args = (2) [undefined, "name"]
    if (searchText == null || searchText === 'undefined') { return json; }
    if (jsonKey === null || jsonKey === 'undefined') { return json; }

    // Copy all objects of original array into new Array.
    let returnObjects = json;
    json.forEach( function ( filterObjectEntery ) {

      if ( filterObjectEntery.hasOwnProperty( jsonKey ) ) {
        if ( typeof filterObjectEntery[jsonKey] !== 'undefined' &&
        filterObjectEntery[jsonKey].toLowerCase().indexOf(searchText.toLowerCase()) > -1 ) {
        } else {
            returnObjects = returnObjects.filter(obj => obj !== filterObjectEntery);
        }
      }
    });
    return returnObjects;
  }
}
