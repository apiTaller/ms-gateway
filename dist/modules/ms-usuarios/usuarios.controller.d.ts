import { HttpService } from '@nestjs/axios';
export declare class UsuariosController {
    private readonly httpService;
    private readonly usuariosServiceUrl;
    constructor(httpService: HttpService);
    obtenerUsuarios(): Promise<any>;
    obtenerUsuarioPorId(id: string): Promise<any>;
    crearUsuario(body: any): Promise<any>;
    actualizarUsuario(id: string, body: any): Promise<any>;
    eliminarUsuario(id: string): Promise<any>;
}
