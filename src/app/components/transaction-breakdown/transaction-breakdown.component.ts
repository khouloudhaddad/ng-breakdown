import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-transaction-breakdown',
  templateUrl: './transaction-breakdown.component.html',
  styleUrls: ['./transaction-breakdown.component.scss']
})
export class TransactionBreakdownComponent implements OnInit {

  ngOnInit(): void {

    $('.value').each(function () {
      var text = $(this).text();
      $(this).parent().css('width', text);
    });

  }

  expand(event: Event) {

    console.log(event.currentTarget)

  }


}
