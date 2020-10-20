export class Ente {
    public telefono: number; 
    public telefonoPublico: boolean; 
    public descripcion: string; 
    public enlace: string; 
    public nombre: string; 
    public nombreCorto: string; 
    public correo: string; 
    public correoPublico: boolean; 
    public universitario: boolean; 
    public imagen: string; // TODO: image file

    constructor(
        telefono: number, 
        telefonoPublico: boolean, 
        descripcion: string, 
        enlace: string,
        nombre: string,
        nombreCorto: string, 
        correo: string, 
        correoPublico: boolean, 
        universitario: boolean, 
        imagen: string
        )
        {
            this.telefono = telefono; 
            this.telefonoPublico = telefonoPublico; 
            this.descripcion =descripcion; 
            this.enlace = enlace; 
            this.nombre = nombre; 
            this.nombreCorto = nombreCorto; 
            this.correo = correo; 
            this.correoPublico = correoPublico; 
            this.universitario = universitario; 
            this.imagen = imagen; 

        }
}