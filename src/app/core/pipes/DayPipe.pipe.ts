import { formatDate } from "@angular/common";
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"DayPipe"
})
export class DayPipe implements PipeTransform{
    constructor(@Inject(LOCALE_ID) public locale: string){

    }
    transform(value: any) {
        const formatdate = formatDate(value, 'yyyy-MM-dd HH:mm', this.locale)
        let formatter = new Intl.DateTimeFormat(this.locale, {
          month:"2-digit",day:"2-digit",year:"numeric"
        });

        let formattedTime = formatter.format(new Date(formatdate));
        console.log("day is + " + new Date(formatdate).getUTCDate())
          return new Date(formatdate).getUTCDate()+1;
    }

}