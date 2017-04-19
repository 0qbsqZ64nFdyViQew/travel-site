import $ from 'jquery';

class Modal {
  constructor(){
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

events() {
  //clicking the open modal button
  this.openModalButton.click(this.openModal.bind(this));
  // bind keeps the original value of "this"... other way is to set "that" --> wieso nicht hier??
  // clicking the x close modal button
  this.closeModalButton.click(this.closeModal.bind(this));
  // pushes any key
  $(document).keyup(this.keyPressHandler.bind(this));
}

keyPressHandler(e) {
  // keyCode 27 is ESC
  if (e.keyCode == 27) {
    console.log(this);
    this.closeModal ();
  }
}

openModal() {
  this.modal.addClass("modal--is-visible");
  return false; /* prevents browser from following the "#" link */
}

closeModal() {
  this.modal.removeClass("modal--is-visible");
  return false;
}
}

export default Modal;
