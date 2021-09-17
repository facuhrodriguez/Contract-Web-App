import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Contract } from 'web3-eth-contract/types'
import { AbiItem } from 'web3-utils/types'
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class Web3ConfigService {
  // private web3: Web3;
  // private contract: Contract;


  constructor() {
    // this.web3 = new Web3(environment.smartContracts.provider);
    // this.web3.defaultAccount = environment.smartContracts.defaultAccount;
    // let abiContract: AbiItem[] = [];
    // abi.forEach((data: any) => {
    //   const abiItem: AbiItem = {
    //     stateMutability: data?.stateMutability,
    //     type: data.type,
    //     inputs: data?.inputs,
    //     name: data?.name,
    //     outputs: data?.outputs,
    //     constant: data?.constant,
    //     anonymous: data?.anonymus,
    //     gas: data?.gas,
    //     payable: data?.payable
    //   }
    //   abiContract.push(abiItem);
    // });
    // this.contract = new this.web3.eth.Contract(abiContract, environment.smartContracts.address);
    // this.contract.defaultAccount = environment.smartContracts.defaultAccount;
  }


  // public getContract(): Contract {
  //   return this.contract;
  // }

}
