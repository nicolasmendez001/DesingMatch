import { ModelDisenios } from './ModelDisenios';

export class ModelProyecto{
    idProyecto?: number;
    nombre?: String;
    descripcion?: String;
    valor?: number;
    disenios?: Array<ModelDisenios>;
}