import { Component, OnInit } from '@angular/core';
import Web3 from 'web3';
import Identicon from 'identicon.js';
import { Contract } from 'web3-eth-contract/types';
import { LoadsmartcontractService } from '../../services/loadsmartcontract.service';
import { FAQTokenService } from '../../services/FAQtoken.service';
import { EthswapService } from '../../services/ethswap.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-exchange',
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.sass']
})
export class ExchangeComponent implements OnInit {

  public window: any;
  private web3: Web3 | undefined;
  private accounts: string[] = [];
  private balance: string = "0";
  private identicon: Identicon | undefined;
  private tokenContract: Contract | null = null;
  private ethSwapContract: any = null;
  private tokenBalance: string = "0";
  public isLoading: boolean = true;
  public formData: FormGroup = new FormGroup({});
  public buyForm: boolean = true;
  public sellForm: boolean = false;


  constructor(private loadSC: LoadsmartcontractService,
    private tokenSvc: FAQTokenService,
    private ethSvc: EthswapService,
    private fb: FormBuilder) {
    this.initForm();
  }

  async ngOnInit() {
    await this.loadData();
  }

  private async loadData(): Promise<void> {
    this.isLoading = true;
    await this.loadWeb3();
    await this.loadContracts();
    this.isLoading = false;
  }


  public async loadContracts(): Promise<void> {
    if (this.web3) {
      this.tokenContract = await this.tokenSvc.getTokenData(this.web3);
      this.ethSwapContract = await this.ethSvc.getEthSwap(this.web3);
      const balance = await this.tokenContract?.methods.balanceOf(this.accounts[0]).call();
      this.tokenBalance = balance.toString();
    }
  }

  public async loadWeb3(): Promise<void> {
    this.window = await this.loadSC.loadWeb3();
    this.web3 = await this.loadSC.loadBlockchainData();
    this.accounts = await this.web3?.eth.getAccounts();
    this.balance = await this.web3.eth.getBalance(this.accounts[0]);
    this.identicon = new Identicon(this.accounts[0]);
  }


  public getIdenticon(): string {
    if (this.identicon) {
      const url = `data:image/png;base64,${this.identicon.toString()}`;
      return url;
    }
    return '';
  }


  public convertEtwBalance(): string {
    const weiValue: string | undefined = this.web3?.utils.fromWei(this.balance, "ether");
    if (weiValue)
      return weiValue;
    return '';
  }

  public convertTokenBalance(): string {
    const weiValue: string | undefined = this.web3?.utils.fromWei(this.tokenBalance, "ether");
    if (weiValue)
      return weiValue;
    return '';
  }

  public getAccounts(): string[] {
    return this.accounts;
  }


  private initForm(): void {
    this.formData = this.fb.group({
      input: new FormControl('', Validators.required),
      output: new FormControl({ value: '', disabled: true }, Validators.required)
    })
    this.onFormChanges();
  }


  public getEthBalance(): string {
    return this.balance;
  }

  public getForm(): FormGroup {
    return this.formData;
  }


  private onFormChanges(): void {
    this.formData.get('input')?.valueChanges.subscribe(newInput => {
      const etherAmount = newInput.toString()
      if (this.buyForm)
        this.formData.patchValue({
          output: etherAmount * 100
        })
      else {
        this.formData.patchValue({
          output: etherAmount / 100
        })
      }
    })
  }

  public onSubmit(): void {
    const amount: string = this.formData.value.input.toString();
    const weiAmount: string | undefined = this.web3?.utils.toWei(amount, 'ether');
    if (this.buyForm) {
      if (weiAmount) {
        this.isLoading = true;
        this.ethSvc.buyTokens(weiAmount, this.accounts[0]).then(async () => {
          await this.loadData();
        })
          .catch((error: any) => {
            this.isLoading = false;
            console.log(error);
          })
      }
    } else {
      this.isLoading = true;
      if (weiAmount) {
        this.tokenSvc.approveTransaction(this.ethSwapContract._address, weiAmount, this.accounts[0]).then(() => {
          this.ethSvc.sellTokens(weiAmount, this.accounts[0]).then(async () => {
            await this.loadData();
          })
            .catch((error: any) => {
              this.isLoading = false;
              console.log(error);
            })
        }).catch((error: any) => {
          this.isLoading = false;
          console.log(error);
        })
      }
    }
  }


  public onBuyButton(): void {
    this.buyForm = true;
    this.sellForm = false;
  }

  public onSellButton(): void {
    this.sellForm = true;
    this.buyForm = false;
  }

  public async withdrawMoney(): Promise<void> {
    this.isLoading = true;
    this.ethSvc.witdraw(this.accounts[0]).then(async () => {
      await this.loadData();
    })
      .catch((error: Error) => {
        console.log(error);
        this.isLoading = false;
      })
  }
}
