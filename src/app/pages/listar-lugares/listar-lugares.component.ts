import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';

interface lugares {
  _id: string,
  lugar:string,
  descricao: string,
  status:string,
  pontosTuristicos:string
}

@Component({
  selector: 'app-listar-lugares',
  templateUrl: './listar-lugares.component.html',
  styleUrls: ['./listar-lugares.component.css']
})
export class ListarLugaresComponent implements OnInit {

  public constructor(private conn: ConfigService)  {  }

  public _lugares:lugares;
  ngOnInit(): void {
    let res = this.conn.getLugares();
    
    res.subscribe((a:lugares) =>  this._lugares= a);
  }
  delete(id)
  {
    let res = this.conn.delLugares(id);
  }

}
