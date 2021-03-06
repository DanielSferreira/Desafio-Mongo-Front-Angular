import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import { FormGroup, FormControl } from '@angular/forms';
interface Estados {
  value: string;
  text: string;
}
interface lugares {
  lugar:string,
  descricao: string,
  status:string,
  pontosTuristicos:string
}
class Lugare {
  lugar:string;
  descricao: string;
  status:string;
  pontosTuristicos:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public constructor(private conn: ConfigService)  {  }
  form: FormGroup;
  ngOnInit()
  {
    this.createForm(new Lugare());
    console.log("Tem Certeza?");
    let res = this.conn.getLugares();
    console.log(res.subscribe(a =>  console.log(a)));
  }
  createForm(lugar: lugares) {
    this.form = new FormGroup({
      lugar: new FormControl(lugar.lugar),
      descricao: new FormControl(lugar.descricao),
      status: new FormControl(lugar.status),
      pontosTuristicos: new FormControl(lugar.pontosTuristicos)
    })
  }
  
  setlugar()
  {
    const lugar1: lugares = {
      lugar:this.form.controls["lugar"].value,
      descricao: this.form.controls["descricao"].value,
      status:this.form.controls["status"].value,
      pontosTuristicos:this.form.controls["pontosTuristicos"].value
    }
    console.log(lugar1);
    
    let res = this.conn.setLugares(lugar1);
    console.log(res.subscribe(a =>  console.log(a)));
  }
  
  private lugar: lugares;

  title = 'Desafio-Mongo-Front-Angular';
  Estados: Estados[] = [
    {value: "1", text: "Quero visitar"},
    {value: "2", text: "Estou visitando / Próxima parada"},
    {value: "3", text: "Já Visitei"}
  ];
}
