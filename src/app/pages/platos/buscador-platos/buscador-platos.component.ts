import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { debounceTime, map, Subject } from 'rxjs';
import { Result, Plato } from 'src/app/core/interfaces/plato.interface';
import { PlatosService } from 'src/app/core/services/platos.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-buscador-platos',
  templateUrl: './buscador-platos.component.html',
  styleUrls: ['./buscador-platos.component.css']
})
export class BuscadorPlatosComponent implements OnInit {

  loading:boolean = false;

  platos:Plato[] | null = []

  subject = new Subject()


  constructor(
    private PlatoService:PlatosService,
    private titleService:Title
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle("Buscar Platos - A la Carta");
    this.subject.pipe(
      debounceTime(1000)    //Delay de busqueda
    ).subscribe((query:any) => {
      if(query.length>2){
        this.loading = true;
        this.PlatoService.BuscarPlatos(query)
        .subscribe((result:Result) => {
          if(result.results.length==0){ //Si no hay resultados
            this.platos = null
            }else{
            this.platos = result.results

          }
          this.loading = false;
        },err => {
          swal.fire('No se pudo establecer conexión, intente mas tarde', '', 'error')
          this.loading = false;
        })
      }else{ //Si la query esta vacia o es menor a 2 caracteres no buscar 
        this.platos = []
      }
      
    }) 
  }

  Search(e:any){
  
    this.subject.next(e.target.value)
  }

}
