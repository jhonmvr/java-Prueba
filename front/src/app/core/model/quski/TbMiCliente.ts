export class TbMiCliente {
  id: number;
  apellidoPaterno: string;
  ApellidoMateerno: string;
  segundoNombre: string;
  callePrincipal: string;
  celularReferencia: string;
  direccion: string;
  direccionTrabajo: string;
  email: string;
  empresa: string;
  estado: string;
  estadoCivil: string;
  fechaActualizacion: Date;
  fechaCreacion: Date;
  fechaNacimiento: Date;
  identificacion: string;
  ingresoMensual: string;
  ingresosMensuales: string;
  interseccion: string;
  lugarNacimiento: string;
  nacionalidad: string;
  nivelEstudios: string;
  primerNombre: string;
  nombreReferencia: string;
  numeroDommicilio: string;
  ocupacion: string;
  ocupacionInmueble: string;
  referenciaUbicacion: string;
  sector: string;
  telefonoCelular: string;
  telefonoFijo: string;
  telefonoReferencia: string;
  telefonoTrabajo: string;
  tipoId: string;
  usuarioActualizacion: string;
  usuarioCreacion: string;
  tbMiAbonos: any;
  canton: any;
  cuentaBancaria: number;
  tarjetaCredito: number;
  deudor: number;
  figuraPolitica: number;
  tbMiContactabilidads: any;
  tbMiContratos: any;
  tbMiMovimientoCajas: any;
  tbMiVentaLotes: any;
  constructor() {
    this.tbMiAbonos = null;
    this.canton = null;
    this.tbMiContactabilidads = null;
    this.tbMiContratos = null;
    this.tbMiMovimientoCajas = null;
    this.tbMiVentaLotes = null;
  }
}
