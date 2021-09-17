import { Injectable } from '@angular/core';
import Web3 from 'web3';
import EthSwap from '../../../environments/smartContracts/EthSwap.json';
import { Contract } from 'web3-eth-contract/types';

@Injectable({
  providedIn: 'root'
})
export class EthswapService {

  private ethSwapContract: Contract | null = null;

  constructor() { }


  public async getEthSwap(web3: Web3): Promise<Contract | null> {
    const networkId: number = await web3.eth.net.getId()
    const ethswapData: any = (EthSwap as any).networks[networkId];
    if (ethswapData) {
      this.ethSwapContract = new web3.eth.Contract((EthSwap as any).abi, ethswapData.address);
      return this.ethSwapContract;
    }
    return null;
  }


  public async buyTokens(amount: string, account: string): Promise<any> {
    return await this.ethSwapContract?.methods.buyTokens().send({ from: account, value: amount })
  }

  public async sellTokens(amount: string, account: string): Promise<any> {
    return await this.ethSwapContract?.methods.sellTokens(amount).send({ from: account });
  }

  public async witdraw(account: string): Promise<any> {
    return await this.ethSwapContract?.methods.withdrawMoney().send({ from: account });
  }
}
