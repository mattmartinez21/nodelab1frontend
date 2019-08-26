import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  myCart: any[];

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.cart.getAllItems().subscribe(response => (this.myCart = response));
  }
}
