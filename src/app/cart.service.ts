import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { R3BoundTarget } from "@angular/compiler";

@Injectable({
  providedIn: "root"
})
export class CartService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<any> {
    return this.http.get("http://localhost:5000/shoppingcart");
  }

  postItem(newItem: object): Observable<any> {
    return this.http.post("http://localhost:5000/shoppingcart", newItem);
  }

  putItemChanges(item: object, id: number): Observable<any> {
    return this.http.put(`http://localhost:5000/shoppingcart/${id}`, item);
  }

  deleteItems(id: number): Observable<any> {
    return this.http.delete(`http://localhost:5000/shoppingcart/${id}`);
  }
}
