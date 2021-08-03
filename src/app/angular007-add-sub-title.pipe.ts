import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'angular007AddSubTitle'
})
export class Angular007AddSubTitlePipe implements PipeTransform {

  transform(value: string, gender: string): string {
    if(gender.toLowerCase()=="male"){
      return "Mr. "+value;
    }else{
      return "Ms. "+value;
    }

    
  }

}
