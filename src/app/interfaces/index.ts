export interface Estados {
    value: string;
    text: string;
}
export interface lugares {
    lugar:string,
    descricao: string,
    status:string,
    pontosTuristicos:string
}
export class Lugares {
    lugar:string;
    descricao: string;
    status:string;
    pontosTuristicos:string
}
export class LugaresEdit {
    _id: string;
    lugar: string;
    descricao: string;
    status: string;
    pontosTuristicos: string[]
  }