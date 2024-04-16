import { Component } from '@angular/core';
import { Arrendador } from '../../../models/Arrendador';
import { ArrendadorService } from '../../../services/arrendador.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ArrendadorComponent } from '../arrendador/arrendador.component';

@Component({
    selector: 'app-list-arrendador',
    standalone: true,
    templateUrl: './list-arrendador.component.html',
    styleUrl: './list-arrendador.component.css',
    imports: [CommonModule, RouterOutlet, ArrendadorComponent]
})
export class ListArrendadorComponent {

  arrendadores: Arrendador[] = [];

  constructor(private ArrendadorService: ArrendadorService){}

  ngOnInit(): void {
    this.ArrendadorService.getArrendadores().subscribe(arrendadores => {
      this.arrendadores = arrendadores;
      console.log(this.arrendadores);
    });}
}