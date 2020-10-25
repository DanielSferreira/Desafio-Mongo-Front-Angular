import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../config.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Lugares, lugares, Estados } from "./../../interfaces/";

@Component({
  selector: 'app-form-lugares',
  templateUrl: './form-lugares.component.html',
  styleUrls: ['./form-lugares.component.css']
})
export class FormLugaresComponent implements OnInit {

  public constructor(private conn: ConfigService)  {  }
  form: FormGroup;

  ngOnInit()
    { this.createForm(new Lugares());  }

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
    let res = this.conn.setLugares(this.form.value);
    console.log(res.subscribe(a =>  console.log(a)));
  }

  Estados: Estados[] = [
    {value: "1", text: "Quero visitar"},
    {value: "2", text: "Estou visitando / Próxima parada"},
    {value: "3", text: "Já Visitei"}
  ];
}
