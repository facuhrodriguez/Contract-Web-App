import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './components/exchange/exchange.component';
import { EthswapRoutingModule } from './ethswap-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    EthswapRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EthswapModule { }
