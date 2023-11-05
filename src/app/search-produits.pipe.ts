import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProduits'
})
export class SearchProduitsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return value;
    if(!args) return value;
  
    args = args.toLowerCase();

    return value.filter((item: any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
