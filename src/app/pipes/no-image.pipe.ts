import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(images: any[]): string {
    return (images === undefined || images.length === 0) ? 'assets/img/cassette.png' : images[0].url;
  }

}
