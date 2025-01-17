import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { MerchandiseService } from '../../services/merchandise.service';
import { Merchandise } from '../../../../shared/models/merchandise-model';
import { ModalAddMerchandiseComponent } from '../../../../shared/components/modal-add-merchandise/modal-add-merchandise.component';
import { ModalConfirmationComponent } from '../../../../shared/components/modal-confirmation/modal-confirmation.component';
import { Authentication} from '../../../../shared/services/authentication.service';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrl: './merchandise.component.css'
})
export class MerchandiseComponent {

  // Stores the list of merchandise fetched from the service
  merchandiseItem: Merchandise[];

  // A reference to the currently opened modal
  bsModalRef?: BsModalRef;

// MerchandiseService: Handles data operations
// BsModalService: For displaying modals
// ToastrService: For showing toast messages
  constructor(private merchandiseService: MerchandiseService,
              private modalService: BsModalService,
              private toast: ToastrService,
              private authservice: Authentication) { }

  ngOnInit(): void {
    this.refreshMerchandiseItem();
  }

  // Fetches the merchandise list from the service and updates merchandiseItem
  refreshMerchandiseItem() {
    this.merchandiseItem = this.merchandiseService.getMerchandise();
  }

  // Opens the modal for adding new merchandise
  openAddMerchantModal() {
    this.bsModalRef = this.modalService.show(ModalAddMerchandiseComponent, {
      class: 'custom-modal-width',
    });

    // When the modal emits the updateMerchandise event, the received merchandise is:
    // Added via addMerchandise(data).
    // A success toast is displayed.
    // The list is refreshed.
    this.bsModalRef.content.updateMerchandise.subscribe((data: Merchandise) => {
      this.merchandiseService.addMerchandise(data);
      this.toast.success("Merchandise added successfully!")
      this.refreshMerchandiseItem();
    })
  }

  // Opens the modal for editing an existing merchandise item
  editMerchandise(merchandise: Merchandise) {
    this.bsModalRef = this.modalService.show(ModalAddMerchandiseComponent, {
      initialState: {
        selectedMerchandise: merchandise
      },
      class: 'custom-modal-width'
    });

    this.bsModalRef.content.updateMerchandise.subscribe((data: Merchandise) => {
      this.merchandiseService.editMerchandise(data);
      this.toast.success("Merchandise updated successfully!");
      this.refreshMerchandiseItem();
    })

  }

  // Opens the confirmation modal to delete a merchandise item
  deleteMerchandise(merchandise: Merchandise) {
    this.bsModalRef = this.modalService.show(ModalConfirmationComponent, {
      initialState: {
        title: 'Delete Merchandise - ' + merchandise.title,
        content: 'Are you sure you want to delete this merchandise?',
        cancelText: 'No',
        confirmText: 'Yes'
      },
      class: 'custom-modal-width'
    })

    this.bsModalRef.content.onConfirm.subscribe(() => {
      this.merchandiseService.deleteMerchandise(merchandise.id);
      this.toast.success("Merchandise deleted successfully!");
      this.refreshMerchandiseItem();
    });
  }

  logout(): void {
    this.authservice.logout();
  }
}
