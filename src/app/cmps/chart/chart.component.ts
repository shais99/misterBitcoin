import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  @Input() title
  @Input() data
  @Input() columns
  chartWidth = 1100
  options = {
    backgroundColor: '#2c2c54',
    colors: ['orange', '#2c2c54'],
  }

  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 1100) this.chartWidth = window.innerWidth - 50
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    const currWidth = event.target.innerWidth
    if (currWidth > 1100) return this.chartWidth = 900
    this.chartWidth = currWidth - 50
  }

}
