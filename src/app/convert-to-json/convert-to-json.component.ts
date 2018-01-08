import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Products } from './products';
import * as $ from 'jquery';



type products = Array<Products>;

@Component({
  selector: 'app-convert-to-json',
  templateUrl: './convert-to-json.component.html',
  styleUrls: ['./convert-to-json.component.css']
})
export class ConvertToJsonComponent implements OnInit {

  data: products;
  constructor() { }


  ngOnInit() {
  }
  onFileChange(evt: any){
    /* wire up file reader */
		const target: DataTransfer = <DataTransfer>(evt.target);
		if (target.files.length !== 1) throw new Error('Cannot use multiple files');
		const reader: FileReader = new FileReader();
		reader.onload = (e: any) => {
      /* read workbook */
			const bstr: string = e.target.result;
			const wb: XLSX.WorkBook = XLSX.read(bstr, {type: 'binary'});

			/* grab first sheet */
			const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.data = <products>(XLSX.utils.sheet_to_json(ws));
  };
  reader.readAsBinaryString(target.files[0]);
  var element = $('.itemlist');
  var domHeight = element.height();
  $('.random-background').css('height', domHeight+'vh');

}
// public OpenProduct(i){
//   var j = document.getElementsByClassName('product-image[item-data="'+i+'"] img');
//   console.log(j[0].getAttribute("src"));
//   document.getElementsByClassName('lightbox-blanket .product-image img')[0].setAttribute("src",j[0].getAttribute("src") )

//   $(".lightbox-blanket").toggle();
//   $("#product-quantity-input").val("0");
//   this.CalcPrice ("0"); 
// }

 

 public OpenProduct(i){
  var j = $('.product-image[item-data="'+i+'"] img');
  var lbi = $('.lightbox-blanket .product-image img');
  console.log($(j).attr("src"));
  $(lbi).attr("src", $(j).attr("src"));
  $(".lightbox-blanket").toggle();
  $("#product-quantity-input").val("0");
  this.CalcPrice ("0");
  
}

public GoBack(){
  $(".lightbox-blanket").toggle();
}

//Calculate new total when the quantity changes.
 CalcPrice (qty: string){
   let x : number;
  var price = $(".product-price").attr("price-data");
  x = parseFloat(price) * parseFloat(qty);
  var total = x.toFixed(2);
  $(".product-checkout-total-amount").text(total);
}

//Reduce quantity by 1 if clicked
 public SubtractQuantity(){
  var value = $("#product-quantity-input").val();
  //console.log(value);
  var newValue = parseInt(value.toString()) - 1;
  if(newValue < 0) newValue=0;
  $("#product-quantity-input").val(newValue);
  this.CalcPrice(newValue.toString());
};

//Increase quantity by 1 if clicked
public AddProduct(){
  var value = $("#product-quantity-input").val();
  //console.log(value);
  var newValue = parseInt(value.toString()) + 1;
  $("#product-quantity-input").val(newValue);
  this.CalcPrice(newValue.toString());
};

public AddQuantity(){
  var value = $("#product-quantity-input").val();
  //console.log(value);
  this.CalcPrice(value.toString());
};


//  AddToCart(e){
//   e.preventDefault();
//   var qty = $("#product-quantity-input").val();
//   if(qty === '0'){return;}
//   var toast = '<div class="toast toast-success">Added '+ qty +' to cart.</div>';  
//   $("body").append(toast);
//   setTimeout(function(){ 
//   $(".toast").addClass("toast-transition");
//     }, 100);
//   setTimeout(function(){      
//     $(".toast").remove();
//   }, 3500);
// }
}
