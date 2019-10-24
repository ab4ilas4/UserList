import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnChanges {
  
@Input() show:boolean;

  constructor(private spinner:NgxSpinnerService) { }

  ngOnChanges(): void {
    if(this.show){
      this.spinner.show();
    }else{
      this.spinner.hide();
    }
  }
  ngOnInit() {
  }

}
