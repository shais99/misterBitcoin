import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {

  @Input() contact;
  @Output() onTransferFund = new EventEmitter
  transferAmount: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
