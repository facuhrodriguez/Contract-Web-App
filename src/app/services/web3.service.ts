import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract/types'
import { environment } from 'src/environments/environment';
import abi from 'src/environments/smartContracts/abi.json';
@Injectable({
  providedIn: 'root'
})

export class Web3Service {
  private web3: Web3;
  private contract: Contract;


  constructor() {
    this.web3 = new Web3(environment.smartContracts.provider);
    this.web3.defaultAccount = environment.smartContracts.defaultAccount;
    const abiContract: any = JSON.parse(JSON.stringify(abi));
    this.contract = new this.web3.eth.Contract(abiContract, environment.smartContracts.address);
  }


  public getContract(): Contract {
    return this.contract;
  }

}
