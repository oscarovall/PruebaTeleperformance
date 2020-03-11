import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  registerForm: FormGroup;
  extrasList: [];
  placeHolderList: [];

  constructor(private fb: FormBuilder, private dataService: DataService) { }  

  ngOnInit() {
    this.builderForms()
    this.getExtras()
    this.getJsonPlaceHolder()
  }
  builderForms(){
    this.registerForm = this.fb.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]], 
      motivo: ['', [Validators.required]],   
      documento: ['', [Validators.required]],
      fechaInicio: ['', [Validators.required]],
      fechaFin: ['', [Validators.required]],
      inicioTurno: ['', [Validators.required]],
      finTurno: ['', [Validators.required]],
      inicioHoraExtra: ['', [Validators.required]],
      finHoraExtra: ['', [Validators.required]],
    })
    
  }
  saveExtras(){
    let data = this.registerForm.value;
    console.warn(this.registerForm.value);

    console.log("ok", this.registerForm.controls);
    console.log("data", data);
    this.dataService.saveExtras(data)
    .subscribe(
      res =>{
        console.log("res",res)
      },
      err=> {
        console.log("Error", err)
      }
    );
  }
  getExtras(){
    this.dataService.getExtras()
    .subscribe(
      res =>{
        this.extrasList = res;
        console.log("res",res)
      },
      err=> {
        console.log("Error", err)
      }
    );
  }
  deleteExtra(id){
    console.log("id",id)
    this.dataService.deleteExtra(id)
    .subscribe(
      res =>{        
        console.log("res",res)
      },
      err=> {
        console.log("Error", err)
      }
    );
  }
  getJsonPlaceHolder(){
    this.dataService.getJsonPlaceHolder()
    .subscribe(
      res =>{
        this.placeHolderList = res;
        console.log("jph",res)
      },
      err=> {
        console.log("Error", err)
      }
    );
  }
  

}
