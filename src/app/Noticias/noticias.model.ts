export class Noticias{
   public titulo: string;
   public descripcion: string;
   public imagenPath: string;
   public fecha: Date;
   public lugares: Array<any>;
   //public entes: Array<Ente>;
   // publicresponsable: Usuario;
   public enlace: string;
   public etiquetas: Array<string>;


   constructor(
     titulo: string,
     descripcion: string,
     imagenPath: string,
     fecha: Date,
     lugares: Array<any>,
     // entes: Array<Ente>,
     // responsable: Usuario,
     enlace: string,
     etiquetas: Array<string>
   )
   {
     this.titulo = titulo;
     this.descripcion = descripcion;
     this.imagenPath = imagenPath;
     this.lugares = lugares;
     // this.entes = entes;
     // this.responsable = responsable;
     this.enlace = enlace;
     this.etiquetas = etiquetas;
   }
}
