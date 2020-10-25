import { Component, OnInit } from '@angular/core';
import {   Router } from '@angular/router';
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

  public constructor(private router: Router, private conn: ConfigService)  {  }

  public _lugares:lugares;
  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
 }
  ngOnInit(): void {
    let res = this.conn.getLugares();
    res.subscribe((a:any) =>  this._lugares= a);
  }
  delete(id)
  {
    let res = this.conn.delLugares(id).toPromise();
    res.then(e=>{
      console.log(e);
      this.redirectTo('listar');
  
    });
  }

}
