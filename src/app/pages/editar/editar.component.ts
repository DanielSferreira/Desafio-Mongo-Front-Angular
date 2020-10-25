import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; 
import { ConfigService } from 'src/app/config.service';
interface Estados {
  value: string;
  text: string;
} 
class Lugares {
  _id: string;
  lugar: string;
  descricao: string;
  status: string;
  pontosTuristicos: string[]
}
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor( private route: ActivatedRoute, private conn: ConfigService) { }

  public form: FormGroup;
  public title: string;
  
  public async getF():Promise<any> 
  { 
    return this.conn.getLugaresByLugar(this.route.snapshot.paramMap.get("find")).toPromise(); 
  }

  public async ngOnInit() 
  {
    this.createForm(new Lugares())
    await this.getF().then(
      (a:Lugares) => {
        this.createForm(a);
        this.title = a.lugar;
      });
  }

  createForm(lugar: Lugares) 
  {
    if(lugar.pontosTuristicos === undefined) lugar.pontosTuristicos = [""];
    this.form = new FormGroup({
      _id: new FormControl(lugar._id),
      lugar: new FormControl(lugar.lugar),
      descricao: new FormControl(lugar.descricao),
      status: new FormControl(lugar.status),
      pontosTuristicos: new FormControl(lugar.pontosTuristicos.join('\n'))
    });
  }
  
  setlugar() 
  {
    this.conn.putLugares(this.form.value).toPromise().then(a => console.log(a));
  }

  Estados: Estados[] = [
    { value: "1", text: "Quero visitar" },
    { value: "2", text: "Estou visitando / Próxima parada" },
    { value: "3", text: "Já Visitei" }
  ];
}
