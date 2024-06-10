import { Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { CategoryAventuraComponent } from './components/category-aventura/category-aventura.component'
import { CategoryCooperativoComponent } from './components/category-cooperativo/category-cooperativo.component';
import { CategoryEstrategiaComponent } from './components/category-estrategia/category-estrategia.component';
import { CategoryFamiliarComponent } from './components/category-familiar/category-familiar.component';
import { CategoryRegistroComponent } from './components/category-registro/category-registro.component';

export const routes: Routes = [
    { path: '', redirectTo: '/index', pathMatch: 'full' },
    { path: 'index', component: IndexComponent }, 
    { path: 'categoryAventura', component: CategoryAventuraComponent },
    { path: 'categoryCooperativo', component: CategoryCooperativoComponent },
    { path: 'categoryEstrategia', component: CategoryEstrategiaComponent },
    { path: 'categoryFamiliar', component: CategoryFamiliarComponent },
    { path: 'categoryRegistro', component: CategoryRegistroComponent }
];
