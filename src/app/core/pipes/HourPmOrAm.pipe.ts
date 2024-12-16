import { formatDate } from "@angular/common";
import { Inject, LOCALE_ID, Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"HourPmOrAm"
})
export class HourPmOrAm implements PipeTransform{
constructor(@Inject(LOCALE_ID) public locale: string){

}
    transform(value: Date) {
        const formatdate = formatDate(value, 'yyyy-MM-dd HH:mm', this.locale)
        let formatter = new Intl.DateTimeFormat(this.locale, {
          hour:'numeric',
          minute: "2-digit",
          hour12: true,
          hourCycle:'h23'
        });

        let formattedTime = formatter.format(new Date(formatdate));
  
          return formatter.format(new Date(formatdate));
    }

}