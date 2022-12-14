import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as moment from 'moment';
import { ResponseModel } from 'src/app/core/Models/response.model';
import { DatabaseService } from 'src/app/core/services/database.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  titlePage = "Prueba Abisoft"
  mantenainceForm!:FormGroup;
  list:any[] = [];
  _birthdate:any;
  _inscriptiondate:any

  constructor(
    private dbSrv:DatabaseService,
    private loadingSrv: LoadingService,
    private toastSrv:ToastService,
    private modalService: NgbModal,
    private fb:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getUser()
  }

  open(content:any, item:any) {
    this.mantenainceForm.reset()
    if(item!=null)
      this.refillForm(Object.freeze(item))
		
    this.modalService.open(content, { ariaLabelledBy: 'modal-mantenaince', size:'lg',centered: true });
	}

  refillForm(item:any){
    this.mantenainceForm.setValue({
      id:item.id,
      name: item.name,
      age: item.age,
      birthdate: item.birthdate,
      inscriptiondate: item.inscriptiondate,
      price:item.price
    })
  }

  buildForm() {
    this.mantenainceForm = this.fb.group({
      id:[0],
      name: ['', Validators.compose([Validators.required]) ],
      age: ['', Validators.compose([Validators.required]) ],
      birthdate: ['',Validators.compose([Validators.required])],
      inscriptiondate: ['',Validators.compose([Validators.required]) ],
      price: ['' ]
    });
  }

  save(){
    
    if(this.mantenainceForm.valid){
      var _bd = moment(this._birthdate.year+"-"+this._birthdate.month+"-"+this._birthdate.day).format('YYYY-MM-DD')
      var _id= moment(this._inscriptiondate.year+"-"+this._inscriptiondate.month+"-"+this._inscriptiondate.day).format('YYYY-MM-DD')

      if(_id<_bd){
        this.toastSrv.WarningToast("La fecha de inscripción debe ser mayor a la fecha de nacimiento");
        return;
      }

      this.mantenainceForm.controls['birthdate'].setValue(_bd)
      this.mantenainceForm.controls['inscriptiondate'].setValue(_id)
  
      if(this.mantenainceForm.controls['age'].value<18){
        this.toastSrv.WarningToast("Debe ser mayor de edad");
        return;
      }
      
      var year:number = Number.parseInt(moment().format('YYYY'))
      var old:number = Number.parseInt(moment(_bd).format('YYYY'))

      if((year-old) !== this.mantenainceForm.controls['age'].value){
        this.toastSrv.WarningToast("La fecha de nacimiento no coincide con la edad");
        return;
      }

      var inscription:number = Number.parseInt(moment(_id).format('YYYY'))
      var calculate = (year-inscription)*100; 
      if(calculate !== Number.parseInt(this.mantenainceForm.controls['price'].value)){
        this.toastSrv.WarningToast("El valor del precio no coincide");
        return;
      }

      const _request = {
        "id": 0,
        "name": this.mantenainceForm.controls['name'].value,
        "age": this.mantenainceForm.controls['age'].value,
        "birthdate": this.mantenainceForm.controls['birthdate'].value,
        "inscriptionDate": this.mantenainceForm.controls['inscriptiondate'].value,
        "price": this.mantenainceForm.controls['price'].value
      }
      
      this.dbSrv.setUser(_request).subscribe((response:ResponseModel)=>{
        if(response.codError == "0"){
          this.toastSrv.InfoToast(response.msgError)
          this.modalService.dismissAll()
          this.getUser();
        }else{
          this.toastSrv.WarningToast(response.msgError,"Alerta")
        }
      })
    }else{
      this.toastSrv.WarningToast("El formulario se encuentra incompleto");
    }
    

  }

  getUser(){
    const _request = {
      Id:0
    }
    this.dbSrv.getUser(_request).subscribe((response:ResponseModel)=>{
      console.log(response)
      if(response.codError == "0"){
        if(response.root[0].length>0){
          this.list = response.root[0]
          this.toastSrv.InfoToast(response.msgError)
        }else{
          this.toastSrv.InfoToast("No hay información para mostrar")
        }
      }else{
        this.toastSrv.WarningToast("Hubo un error al obtener la información","Alerta")
      }
    })
  }

}
