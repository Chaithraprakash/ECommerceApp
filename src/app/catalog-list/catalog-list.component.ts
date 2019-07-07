import { Component, OnInit } from '@angular/core';
import { MenWearService } from './../../services/men-wear-service.service';


@Component({
  selector: 'app-catalog-list',
  templateUrl: './catalog-list.component.html',
  styleUrls: ['./catalog-list.component.css']
})

export class CatalogListComponent implements OnInit {
  public menWearList: any;
  
  modalList: {name: string, price: number,brand: string, image: string, size: string,description: string};
  display= 'none';  
  constructor(public service: MenWearService) { }
  ngOnInit() {    
    this.service.getData().subscribe((response) => {
      this.menWearList = response;
    })
  }
    
    openModal(item: any) {                
        this.modalList ={name: this.menWearList[item].item_name, 
          price: this.menWearList[item].item_price,
          brand: this.menWearList[item].item_brand,
          image: this.menWearList[item].item_image,
          size: this.menWearList[item].item_size,
          description: this.menWearList[item].item_description
        } 
        this.display = 'block';            
    }

    closeModal() {
      this.display = 'none';
  }
  
}
