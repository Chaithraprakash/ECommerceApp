import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogListComponent } from './catalog-list.component';
import { HttpClientModule } from '@angular/common/http';
describe('CatalogListComponent', () => {
  let component: CatalogListComponent;
  let fixture: ComponentFixture<CatalogListComponent>;
  const data: any = require('../../app/stubs/mockResponse.json');
  var list : {name: string, price: number, size: string, brand: string,image: string,description: string} = {
    name: '',
    price: 0,
    size: '',
    brand: '',
    image: '',
    description: ''
  };
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogListComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogListComponent);
    component = fixture.componentInstance;
    component.modalList = list;    
    fixture.detectChanges();
    fixture.autoDetectChanges();
    
  });

  it('should create', () => {   
    component.menWearList = '';
    expect(component).toBeTruthy();
  });

  it('should call closeModal', () => {       
    component.closeModal();
    expect(component.display).toEqual('none');
  });

  it('should call openModal', () => {      
    
    component.menWearList = data.menwear;
    component.openModal(1);
    expect(component.display).toEqual('block');
    expect(component.modalList.name).toEqual("Sports Men Polo Neck Blue T-Shirt");
    expect(component.modalList.brand).toEqual("Arrow");
  });

  it('should call openModal and update modalList', () => {     
    
    component.menWearList = data.menwear;
    component.openModal(2);
    expect(component.display).toEqual('block');
    expect(component.modalList.name).toEqual("Solid Round Neck T Shirt");
    expect(component.modalList.brand).toEqual("Perfomax");
  });

 });
