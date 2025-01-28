import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ps4',
  templateUrl: './ps4.page.html',
  styleUrls: ['./ps4.page.scss'],
  standalone: false,
})
export class Ps4Page implements OnInit {

  juegos = [
    {
      nombre: "Grand Theft Auto V",
      ventas: "25 millones de copias vendidas"
    },
    {
      nombre: "Uncharted 4: A Thief's End",
      ventas: "16 millones de copias vendidas"
    },
    {
      nombre: "The Last of Us Part II",
      ventas: "10 millones de copias vendidas"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  handleReorder(event: any) {
    const movedItem = event.detail.from;
    const toIndex = event.detail.to;

    const itemToMove = this.juegos[movedItem];
    this.juegos.splice(movedItem, 1);
    this.juegos.splice(toIndex, 0, itemToMove);

    event.detail.complete();
  }
}
