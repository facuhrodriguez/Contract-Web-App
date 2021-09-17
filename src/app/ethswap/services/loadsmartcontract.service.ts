import { Injectable } from '@angular/core';
import Web3 from 'web3';
@Injectable({
  providedIn: 'root'
})
export class LoadsmartcontractService {
  constructor() { }

  async loadWeb3(): Promise<any> {
    if ((window as any).ethereum) {
      (window as any).web3 = new Web3((window as any).ethereum)
      await (window as any).ethereum.enable()
    }
    else if ((window as any).web3) {
      (window as any).web3 = new Web3((window as any).web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  public async loadBlockchainData(): Promise<Web3> {
    const web3: Web3 = (window as any).web3;
    return web3;
  }


}
