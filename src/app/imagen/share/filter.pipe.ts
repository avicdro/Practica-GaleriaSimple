import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(items: any[] , criterio: string): any {
    if (criterio === 'all') {
      return items
    } else {
      return items.filter(item => {
        return item.category === criterio;
      })
    }
  }

}
