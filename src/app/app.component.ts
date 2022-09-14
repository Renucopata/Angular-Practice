import { Component, OnInit, VERSION } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private productService: ProductService) {

  }


ngOnInit(): void {
  this.productService.getAllProducts()
      .subscribe(res => {
        console.log('RESPONSE GET: ', res)
      })

    this.productService.createProduct({
      description: 'soy la descripcion',
      imageUrl: 'soy la imagen',
      ownerId: 1,
      price: 20,
      title: 'Polera',
    }).subscribe(res => {
      console.log('RESPONSE POST: ', res)
    })

    this.productService.deleteProduct('p2').subscribe(res => {
      console.log('RESPONSE DELETE: ', res)
    })

}



}
