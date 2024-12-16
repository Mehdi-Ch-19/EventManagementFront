import { formatDate } from "@angular/common";
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'monthtoName',
    
})
export class MonthtoNamePipe implements PipeTransform{
constructor(@Inject(LOCALE_ID) public locale: string){

}
    transform(value: Date) {
        const formatdate = formatDate(value, 'yyyy-MM-dd HH:mm', this.locale)
        let formatter = new Intl.DateTimeFormat(this.locale, {
          month:"2-digit",day:"2-digit",year:"numeric"
          });
        const returnmonth = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let formatd =formatter.format(new Date(formatdate))
        let name= month[new Date(formatdate).getMonth()];
        return  returnmonth[month.indexOf(name)]
    }
    
}