import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private config:any = {
    type: "square-jelly-box",//"line-scale-party",
    size: "large",
    bdColor: "rgba(0, 0, 0, 0.5)",
    color: "#fff"
  }

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  showLoading(){
    this.spinner.show("Loading", this.config);
  }

  hideLoading(){
    this.spinner.hide("Loading");
  }
}
