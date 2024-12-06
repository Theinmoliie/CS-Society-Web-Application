import { CommonModule } from "@angular/common";
import { NgModule, Pipe } from "@angular/core";
import { CardMerchandiseComponent } from "./components/card-merchandise/card-merchandise.component";
import { ModalMerchandiseComponent } from "./components/modal-merchandise/modal-merchandise.component";
import { FormsModule } from "@angular/forms";
import { CardCartTableComponent } from './components/card-cart-table/card-cart-table.component';
import { ModalAddMerchandiseComponent } from "./components/modal-add-merchandise/modal-add-merchandise.component";
import { ModalConfirmationComponent } from "./components/modal-confirmation/modal-confirmation.component";

@NgModule({
    declarations: [
        CardMerchandiseComponent,
        ModalMerchandiseComponent,
        CardCartTableComponent,
        ModalAddMerchandiseComponent,
        ModalConfirmationComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        CardMerchandiseComponent,
        ModalMerchandiseComponent,
        CardCartTableComponent,
        ModalAddMerchandiseComponent,
        ModalConfirmationComponent
    ]
  })
  export class SharedModule { }
