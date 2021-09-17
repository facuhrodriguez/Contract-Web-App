import { Component, OnInit } from '@angular/core';
import { TestContractService } from './services/test-contract.service';
import { Web3ConfigService } from './services/web3Config.service';
import { Contract } from 'web3-eth-contract/types'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'contractWebApp';
  currentValue: number = 0;
  // contract: Contract;
  valueToIncrement: number = 0;
  valueToDecrement: number = 0;

  constructor(private web3Config: Web3ConfigService, private testContract: TestContractService) {
    // this.contract = this.web3Config.getContract();
  }


  ngOnInit(): void {
    // this.setCurrentValue();
  }

  // public setCurrentValue(): void {
  //   this.testContract.getValue(this.contract).then((value: number) => {
  //     this.currentValue = value;
  //   })
  //     .catch((error: Error) => {
  //       console.log(error);
  //     })
  // }

  public async sumValue() {

    // await this.testContract.increment(this.contract, this.valueToIncrement, this.contract.defaultAccount);
    // this.setCurrentValue();
  }

  public async subValue() {
    // await this.testContract.decrement(this.contract, this.valueToDecrement, this.contract.defaultAccount);
    // this.setCurrentValue();

  }


}
