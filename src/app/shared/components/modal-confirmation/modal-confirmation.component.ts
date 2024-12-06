import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-confirmation',
  templateUrl: './modal-confirmation.component.html',
  styleUrl: './modal-confirmation.component.css'
})
export class ModalConfirmationComponent {

  // allow the parent component to configure the modal dynamically when using it
  @Input() title: string = 'Confirm Action';
  @Input() content: string = 'Are you sure you want to proceed?';
  @Input() cancelText: string = 'Cancel';
  @Input() confirmText: string = 'Confirm';

  @Output() onCancel = new EventEmitter<void>();
  @Output() onConfirm = new EventEmitter<void>();

  constructor(public modalRef: BsModalRef) {}

  // Closes the modal using BsModalRef
  closeModal(): void {
    this.modalRef.hide();
  }

  // Emits the onCancel event, notifying the parent that the cancel button was clicked
  handleCancel(): void {
    this.onCancel.emit();
    this.closeModal();
  }

  // Emits the onConfirm event, notifying the parent that the confirm button was clicked
  handleConfirm(): void {
    this.onConfirm.emit();
    this.closeModal();
  }
}
