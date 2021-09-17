import { Injectable } from '@angular/core';
import { Contract } from 'web3-eth-contract/types'
@Injectable({
  providedIn: 'root'
})
export class TestContractService {

  constructor() { }


  public async getValue(contract: Contract): Promise<number> {
    try {
      const counterValue: number = await contract.methods.count().call();
      return counterValue;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async increment(contract: Contract, valueToIncrement: number, from: string | null): Promise<void> {
    try {
      console.log(from)
      await contract.methods.sum(valueToIncrement).send({ from });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async decrement(contract: Contract, valueToDecrement: number, from: string | null): Promise<void> {
    try {
      await contract.methods.sub(valueToDecrement).send({ from });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
