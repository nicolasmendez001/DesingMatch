import { ModelEmpresa } from './ModelEmpresa';
export class ModelProyecto{
    id?: number;
    nombree?: String;
    descripcion?: String;
    valor?: number;
    empresa?: ModelEmpresa;
}