/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity({name: 'CLIENTES'})
export class Clientes {
@PrimaryColumn({name: 'IDCliente'})
  id: number;
@Column({name: 'Nombre'})
Nombre: string
@Column({name: 'Correo'})
Correo: string
@Column({name: 'Teléfono'})
Telefono: string
@Column({name: 'Dirección'})
Direccion: string
@Column({name: 'Ciudad'})
ciudad: string
@Column({name: 'País'})
Pais: string
}