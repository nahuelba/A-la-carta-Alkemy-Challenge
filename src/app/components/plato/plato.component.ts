import { Component, Input, OnInit } from '@angular/core';
import { Plato } from 'src/app/core/interfaces/plato.interface';
import { PlatosService } from 'src/app/core/services/platos.service';

@Component({
  selector: 'app-plato',
  templateUrl: './plato.component.html',
  styleUrls: ['./plato.component.css']
})
export class PlatoComponent implements OnInit {

  @Input() plato!:Plato

  @Input() menu:boolean = true;


  detail:boolean = false;
  
  constructor(
    public PlatosService:PlatosService
  ) { }

  ngOnInit(): void {
  }


  

}
