import { CommonModule } from "@angular/common";
import { NgModule, Pipe } from "@angular/core";
import { CardMerchandiseComponent } from "./components/card-merchandise/card-merchandise.component";
import { ModalMerchandiseComponent } from "./components/modal-merchandise/modal-merchandise.component";
import { FormsModule } from "@angular/forms";
import { CardCartTableComponent } from './components/card-cart-table/card-cart-table.component';

@NgModule({
    declarations: [
        CardMerchandiseComponent,
        ModalMerchandiseComponent,
        CardCartTableComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        CardMerchandiseComponent,
        ModalMerchandiseComponent,
        CardCartTableComponent
    ]
  })
  export class SharedModule { }
