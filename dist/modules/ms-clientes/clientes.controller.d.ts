import { HttpService } from '@nestjs/axios';
export declare class ClientesController {
    private readonly httpService;
    private readonly clientesServiceUrl;
    constructor(httpService: HttpService);
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    create(createClienteDto: any): Promise<any>;
    update(id: string, updateClienteDto: any): Promise<any>;
    remove(id: string): Promise<any>;
}
