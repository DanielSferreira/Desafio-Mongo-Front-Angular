import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
interface Estados {
  value: string;
  text: string;
}
interface lugares {
  lugar: string,
  descricao: string,
  status: string,
  pontosTuristicos: string
}
class Lugare {
  lugar: string;
  descricao: string;
  status: string;
  pontosTuristicos: string
}
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private conn: ConfigService) { }

  form: FormGroup;
  private res;

private pontos;
  ngOnInit(): void {
    this.res = new Lugare();
    
    this.conn.getLugaresByLugar(this.route.snapshot.paramMap.get("find")).subscribe(a => {this.res = a;console.log(a)});
    console.log(this.res.pontosTuristicos);
    
    this.pontos = this.res.pontosTuristicos;
    this.createForm(this.res);
  }

  createForm(lugar: lugares) {
    this.form = new FormGroup({
      lugar: new FormControl(lugar.lugar),
      descricao: new FormControl(lugar.descricao),
      status: new FormControl(lugar.status),
      pontosTuristicos: new FormControl(lugar.pontosTuristicos)
    })
  }

  setlugar() {
    const lugar1: lugares = {
      lugar: this.form.controls["lugar"].value,
      descricao: this.form.controls["descricao"].value,
      status: this.form.controls["status"].value,
      pontosTuristicos: this.form.controls["pontosTuristicos"].value
    }
    console.log(lugar1);

    let res = this.conn.setLugares(lugar1);
    console.log(res.subscribe(a => console.log(a)));
  }

  private lugar: lugares;

  title = 'Desafio-Mongo-Front-Angular';
  Estados: Estados[] = [
    { value: "1", text: "Quero visitar" },
    { value: "2", text: "Estou visitando / Próxima parada" },
    { value: "3", text: "Já Visitei" }
  ];
}
