import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './components/generations/generations.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

const routes: Routes = [
  {path:'generations', component:GenerationsComponent},
  {path:'pokemons', component:PokemonsComponent},
  // {path:'createAccount', component:},
  // {path:'login', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
