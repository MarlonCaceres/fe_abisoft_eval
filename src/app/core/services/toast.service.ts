import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  time:number =  3000;

  constructor(
    private toastr: ToastrService
  ) { }

  SuccessToast(body:any, title?:any, time?:any) {

    this.toastr.success(body, title,{
      tapToDismiss:true,
      timeOut: time >= 1000 ?time:this.time
    });
  }

  ErrorToast(body:any, title?:any, time?:any) {
    this.toastr.error(body, title,{
      tapToDismiss:true,
      timeOut: time >= 1000 ?time:this.time
    });
  }

  InfoToast(body:any, title?:any, time?:any) {
    this.toastr.info(body, title,{
      tapToDismiss:true,
      timeOut: time >= 1000 ?time:this.time
    });
  }

  WarningToast(body:any, title?:any, time?:any) {
    this.toastr.warning(body, title,{
      tapToDismiss:true,
      timeOut: time >= 1000 ?time:this.time
    });
  }
}
