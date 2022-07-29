import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Plato } from 'src/app/core/interfaces/plato.interface';
import { PlatosService } from 'src/app/core/services/platos.service';

@Component({
  selector: 'app-menu-platos',
  templateUrl: './menu-platos.component.html',
  styleUrls: ['./menu-platos.component.css']
})
export class MenuPlatosComponent implements OnInit {

  platos:Plato[] = []
  constructor(
    private PlatosService:PlatosService,
    private titleService:Title
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Menu - A la Carta");

    this.obtenerPlatos()

    this.PlatosService.watchStorage() //Detectar cambios en localstorage
    .subscribe(() => {
     this.obtenerPlatos()
    })
  }



  obtenerPlatos(){
    const platos = localStorage.getItem('platos')
    if(platos){
      this.platos = JSON.parse(platos)
    }
  }
  

  calcularPrecioTotal(){
    var precio = 0
    this.platos.forEach(plato => {
      precio+=plato.pricePerServing
    })
    return precio
  }

  calcularPromedioPreparacion(){
    var tiempo = 0
    this.platos.forEach(plato => {
      tiempo+=plato.readyInMinutes
    })
    return  tiempo / this.platos.length
  }

  calcularHealthScore(){
    var HealthScore = 0
    this.platos.forEach(plato => {
      HealthScore+=plato.healthScore
    })
    return  HealthScore / this.platos.length
  }




}
