import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service';

@Component({
  selector: 'user-bar',
  templateUrl: './user-bar.component.html',
  styleUrls: ['./user-bar.component.scss']
})
export class UserBarComponent implements OnInit {

  user = null;
  bitcoinRate;

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.user = await this.userService.getUser()
    this.bitcoinRate = await this.bitcoinService.getRate(this.user.coins)
  }

}
