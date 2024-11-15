import { Routes } from '@angular/router';

import { Component } from '@angular/core';
import { InicioComponent } from './pagina/inicio/inicio.component';
import { ProductoComponent } from './pagina/producto/producto.component';
import { OfertaComponent } from './pagina/oferta/oferta.component';
import { ContactosComponent } from './pagina/contactos/contactos.component';
import { NosotrosComponent } from './pagina/nosotros/nosotros.component';


export const routes: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'producto', component: ProductoComponent},
    {path: 'oferta', component: OfertaComponent},
    {path: 'contacto', component: ContactosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', redirectTo: 'inicio'},
];


