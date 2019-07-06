import { ModelDisenios } from './ModelDisenios';

export class ModelProyecto{
    id?: number;
    nombree?: String;
    descripcion?: String;
    valor?: number;
    disenios?: Array<ModelDisenios>;
}