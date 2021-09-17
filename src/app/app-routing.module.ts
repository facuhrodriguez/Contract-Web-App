import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exchange',
    pathMatch: 'full'
  },
  {
    path: 'exchange',
    loadChildren: () => import('./ethswap/ethswap.module').then(m => m.EthswapModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
