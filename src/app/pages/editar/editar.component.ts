import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
interface Estados {
  value: string;
  text: string;
}
interface lugares {
  id: string,
  lugar: string,
  descricao: string,
  status: string,
  pontosTuristicos: any
}
class Lugare {
  id: string;
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

  constructor(
    private route: ActivatedRoute,
    private conn: ConfigService) { }

  form: FormGroup;
  public res:lugares;

  public pontos: string;
  ngOnInit(): void {
    this.res = new Lugare();
    console.log("aqui vai");

    this.conn.getLugaresByLugar(this.route.snapshot.paramMap.get("find")).subscribe((a: Lugare) => { 
      this.res = a; 
      this.pontos = a.pontosTuristicos.join('\n');
       console.log("toUp");
       console.log(a);
    });
    this.createForm(this.res);
  }

  createForm(lugar: lugares) {
    this.form = new FormGroup({
      id: new FormControl(lugar.id),
      lugar: new FormControl(lugar.lugar),
      descricao: new FormControl(lugar.descricao),
      status: new FormControl(lugar.status),
      pontosTuristicos: new FormControl(lugar.pontosTuristicos)
    })
  }

  setlugar() {
    const lugar1: lugares = {
      id: this.res.id,
      lugar: this.form.controls["lugar"].value,
      descricao: this.form.controls["descricao"].value,
      status: this.form.controls["status"].value,
      pontosTuristicos: this.form.controls["pontosTuristicos"].value
    }
    console.log(lugar1);

    let res = this.conn.putLugares(lugar1);
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
