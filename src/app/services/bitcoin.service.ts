import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(coins: number): Promise<any> {
    const bitcoinRate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return Promise.resolve(bitcoinRate.data)
  }

  async getMarketPrice(): Promise<any> {
    const marketPrice = await axios.get('https://api.blockchain.info/charts/market-price?timespan=3months&format=json&cors=true')
    return Promise.resolve(marketPrice.data.values)
  }

  async getConfirmedTransactions(): Promise<any> {
    const confirmedTransactions = await axios.get('https://api.blockchain.info/charts/trade-volume?timespan=3months&format=json&cors=true')
    return Promise.resolve(confirmedTransactions.data.values)
  }
}
