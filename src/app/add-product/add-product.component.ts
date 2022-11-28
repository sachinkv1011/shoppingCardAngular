import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  image=""
  title=""
  description=""
  rate=""
  sellername=""
  quantity=""

  product=()=>
  {
    let data:any={
      "image":this.image,
      "title":this.title,
      "description":this.description,
      "rate":this.rate,
      "sellername":this.sellername,
      "quantity":this.quantity
    }
    console.log(data)
  }

}
