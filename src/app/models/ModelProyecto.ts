import { ModelDisenios } from './ModelDisenios';

export class ModelProyecto{
    id?: number;
    nombre?: String;
    descripcion?: String;
    valor?: number;
    disenios?: Array<ModelDisenios>;
}