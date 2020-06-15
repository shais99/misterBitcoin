import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';


@Component({
  selector: 'statistic-page',
  templateUrl: './statistic-page.component.html',
  styleUrls: ['./statistic-page.component.scss']
})
export class StatisticPageComponent implements OnInit {

  marketPriceChart = {
    data: [],
    columns: ['v', 'Average Bitcoin market price'],
    title: 'Average USD market price across major bitcoin exchanges'
  }
  confirmedTransactionsChart = {
    data: [],
    columns: ['v', 'USD value of trading volume on major bitcoin exchanges'],
    title: 'The total USD value of trading volume on major bitcoin exchanges'
  }
  chartWidth = 800

  constructor(private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    await this.getMarketPricesData()
    await this.getConfirmedTransactionsData()
  }

  async getConfirmedTransactionsData() {
    const confirmedTransactions = await this.bitcoinService.getConfirmedTransactions()
    const confirmedTransactionsFix = confirmedTransactions.map(ct => {
      const transaction = [ct];
      transaction.unshift('')
      transaction[1].v = transaction[1].y
      transaction[1].f = transaction[1].y
      delete transaction[1].x
      delete transaction[1].y
      return transaction
    })
    this.confirmedTransactionsChart.data = confirmedTransactionsFix
  }

  async getMarketPricesData() {
    const marketPrices = await this.bitcoinService.getMarketPrice()
    const marketPricesFix = marketPrices.map(mp => {
      const marketPrice = [mp];
      marketPrice.unshift('')
      marketPrice[1].v = marketPrice[1].y
      marketPrice[1].f = marketPrice[1].y
      delete marketPrice[1].x
      delete marketPrice[1].y
      return marketPrice
    })
    this.marketPriceChart.data = marketPricesFix
  }

}
