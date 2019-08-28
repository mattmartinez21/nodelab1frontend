import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  myCart: any[];
  showForm: boolean = false;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService
      .getAllItems()
      .subscribe(response => (this.myCart = response));
  }

  

  addItem(form: NgForm): void {
    this.cartService.postItem(form.value).subscribe(response => {
      this.myCart = response;
      form.reset();
    });
  }

  putQuantity(form: NgForm, id: number): void {
    this.cartService.putItemChanges(form.value, id).subscribe(response => {
      this.myCart = response;
    })
    this.toggleForm();
  }

  deleteItem(id: number): void {
    this.cartService.deleteItems(id).subscribe(response => {
      this.myCart = response;
    });
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

}
