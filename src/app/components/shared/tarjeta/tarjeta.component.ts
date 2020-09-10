import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent {
  @Input() items: any[];
  constructor(private router: Router) {
    console.log(this.items);
   }
   verArtista(item: any){
     let artistaId: string;
     console.log(item);
     if (item.type === 'artist'){
       artistaId = item.id;
       console.log(artistaId);
     }
     else{
       artistaId = item.artists[0].id;
     }
     this.router.navigate(['/artist', artistaId]);
   }
}
