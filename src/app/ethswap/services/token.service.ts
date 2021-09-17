import { Injectable } from '@angular/core';
import Web3 from 'web3';
import Token from '../../../environments/smartContracts/Token.json';
import { Contract } from 'web3-eth-contract/types';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private tokenContract: Contract | null = null;

  constructor() { }


  public async getTokenData(web3: Web3): Promise<Contract | null> {
    const networkId: number = await web3.eth.net.getId()
    const tokenData: any = (Token as any).networks[networkId];
    if (tokenData) {
      this.tokenContract = new web3.eth.Contract((Token as any).abi, tokenData.address);
      return this.tokenContract;
    }
    return null;
  }

  public async approveTransaction(address: string, amount: string, account: string): Promise<void> {
    return await this.tokenContract?.methods.approve(address, amount).send({ from: account });
  }

}
