import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; 
import { ConfigService } from 'src/app/config.service';
import { LugaresEdit, Estados } from "./../../interfaces";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})

export class EditarComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute, private conn: ConfigService) { }

  public form: FormGroup;
  public title: string;

  public async getF():Promise<any> 
  { 
    return this.conn.getLugaresByLugar(this.route.snapshot.paramMap.get("find")).toPromise(); 
  }
  public async ngOnInit() 
  {
    this.createForm(new LugaresEdit())
    await this.getF().then(
      (a:LugaresEdit) => {
        this.createForm(a);
        this.title = a.lugar;
      });
  }

  createForm(lugar: LugaresEdit) 
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
  
  putlugar() 
  {
    this.conn.putLugares(this.form.value).toPromise().then(a => console.log(a));
    this.router.navigate(["listar/"]);

  }

  Estados: Estados[] = [
    { value: "1", text: "Quero visitar" },
    { value: "2", text: "Estou visitando / Próxima parada" },
    { value: "3", text: "Já Visitei" }
  ];
}
