import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounce, interval, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Plato, Result } from '../interfaces/plato.interface';
import swal from 'sweetalert2'

@Injectable({
  providedIn: 'root',
})
export class PlatosService {
  url: string = environment.url.url;
  apikey: string = environment.url.apiKey;

  private storageSub= new Subject<string>();
  
  constructor(
    private http: HttpClient
  ) {}

  BuscarPlatos(query: string) {
    return this.http.get<Result>(`${this.url}/complexSearch?apiKey=${this.apikey}&query=${query}&addRecipeInformation=true`)
  }

  watchStorage(): Observable<any> {
    return this.storageSub.asObservable();
  }

  agregarPlato(plato:Plato){
    const platos =localStorage.getItem('platos')
    
    
    if(platos){
      const platosAgregar = JSON.parse(platos)

      if(this.ValidarPlatos(platosAgregar, plato)){ //Validar los platos
        return;
      }        

      platosAgregar.push(plato)
      localStorage.setItem('platos', JSON.stringify(platosAgregar))
    }else{  
      localStorage.setItem('platos', JSON.stringify([plato])) //Agregar plato a localstorage
    }

    swal.fire('Plato agregado al menu con exito!', '', 'success')
  }
 


  eliminarPlato(Plato:Plato){
    const platos =localStorage.getItem('platos')
    if(platos){
      const platosEliminar = JSON.parse(platos)
      const array =  platosEliminar.filter((plato:Plato) => plato.id!=Plato.id)
      localStorage.setItem('platos', JSON.stringify(array))
    }

    this.storageSub.next('changes')

  }


  ValidarPlatos(platos:Plato[],plato:Plato){ 
    if(platos.length==4){ //maximo 4 platos
      swal.fire('No puedes agregar mas de 4 platos al menu.', '' ,'error')
      return true
    }

    //Verificar si el plato ya esta en el menu
    if(platos.find(item => item.id==plato.id)){
      swal.fire('Ya tienes este plato en el menu.', '' ,'error')
      return true
    }

    //maximo 2 veganos o 2 no veganos
    var PlatosVeganos = 0
    var PlatosNoVeganos = 0
    platos.forEach(plato => {
      (plato.vegan ? PlatosVeganos++ : PlatosNoVeganos++)
    })

    if(plato.vegan){
      (PlatosVeganos==2 ? swal.fire('No puedes tener mas de 2 platos Veganos en el menu.', '' ,'error'): '') //disparar alerta
      
      return PlatosVeganos==2
    }else{
      (PlatosNoVeganos==2 ? swal.fire('No puedes tener mas de 2 platos No Veganos en el menu.', '' ,'error'): '')
      return PlatosNoVeganos==2

    }   
  
  }
}

