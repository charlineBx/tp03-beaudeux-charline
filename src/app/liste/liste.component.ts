import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from '../api.service';
import { Produit } from '../models/produit';


@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent{
    produits : Observable<Produit[]> 
    searchText = '';
    constructor(private apiService : ApiService) {}
  ngOnInit(){
    this.produits = this.apiService.getProduits ();
    
    //console.log("test");
  }

}

