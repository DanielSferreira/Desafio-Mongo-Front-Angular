import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/config.service';
interface Estados {
  value: string;
  text: string;
}
interface lugares {
  _id: string,
  lugar: string,
  descricao: string,
  status: string,
  pontosTuristicos: any
}
class Lugare {
  _id: string;
  lugar: string;
  descricao: string;
  status: string;
  pontosTuristicos: any
}
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor( private route: ActivatedRoute, private conn: ConfigService) { }

  public responseData: lugares;
  public lugaresAlterados: lugares;
  public pontos: string;

  public async getF():Promise<any> { 
    return this.conn.getLugaresByLugar(this.route.snapshot.paramMap.get("find")).toPromise(); }

  public async ngOnInit() {

    let b = await this.getF().then(a => this.responseData = a);
    console.log(b);
    this.pontos = b.pontosTuristicos.join('\n');
    this.lugaresAlterados = this.responseData;
  }
 
  updateLugar(t){ this.lugaresAlterados.lugar = t }
  updateDescr(t){ this.lugaresAlterados.descricao = t }
  updateStatus(t){ this.lugaresAlterados.status = t }
  updatePontos(t){ this.lugaresAlterados.pontosTuristicos = t.split("\n") }

  setlugar() {
    
    console.log(this.lugaresAlterados);
    
    this.conn.putLugares(this.lugaresAlterados).subscribe(a => console.log(a));
    
  }

  Estados: Estados[] = [
    { value: "1", text: "Quero visitar" },
    { value: "2", text: "Estou visitando / Próxima parada" },
    { value: "3", text: "Já Visitei" }
  ];
}
