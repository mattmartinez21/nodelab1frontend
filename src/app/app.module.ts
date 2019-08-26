import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { from } from "rxjs";
import { CartService } from "./cart.service";

@NgModule({
  declarations: [AppComponent, ProductsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule {}
