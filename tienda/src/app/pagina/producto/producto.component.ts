import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
Productos = [
  {
  nombre: "remera",
  descripcion:"remera de algodon",
  precio: 26000,
  imagen: "https://f.fcdn.app/imgs/527bdf/www.textilshop.com.uy/tex/a284/original/catalogo/500033azf1/1920-1200/remera-dry-fit-azul-francia.jpg",
  disponibilidad: true,
},
{
  nombre: "pantalon",
  descripcion:"pantalon de algodon",
  precio: 26000,
  imagen: "https://th.bing.com/th/id/OIP.EoVeGe3XtKhFis2PKW_3iwHaHa?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/OIP.oANGUvD97IWUcS6J30kZSwHaLH?pid=ImgDet&w=191&h=286&c=7",
  disponibilidad: true,
},
{
  nombre: "bombacha de gaucho",
  descripcion:"tela gaberdina",
  precio: 26000,
  imagen: "https://i.pinimg.com/736x/7d/f2/85/7df285e4359fb5c741c5694bc8b7ce79.jpg",
  disponibilidad: true,
},
{
  nombre: "boxer",
  descripcion:"boxer de algodon",
  precio: 26000,
  imagen: "https://th.bing.com/th/id/OIP.OwemwZGOUMj68TFeFygrDAHaJL?w=176&h=219&c=7&r=0&o=5&pid=1.7",
  disponibilidad: true,
},
];
comprar(producto: any){
  alert(`has comprado ${producto.nombre} por ${producto.precio}!`);
}
}

