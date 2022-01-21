import { Component, OnInit } from '@angular/core';
import { Contacts } from './model/contact';
import { ContactsService } from './service/contacts.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'contacts';
  constructor(private service: ContactsService) { }
  dtOptions: any = {};
  contacts: Contacts[];
  current_contact: Contacts;
  new_contact: Contacts;
  is_lucot_first_register = true;
  is_loading_registers = true;
  age: number;
  ngOnInit(): void {
    this.service.getContacts().then((data) =>  {
      this.contacts = data;
      this.is_loading_registers = false;
    }).catch((error) => {
      console.log(JSON.stringify(error));
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.11/i18n/Spanish.json'
      },
      dom: 'Bfrtip',
      buttons: [
        'copy',
        'excel',
        'print'
      ],
    };
  }

  CalculateAge(birth_date: Date) {
    let currentDate = new Date();
    birth_date = new Date(birth_date);
    return currentDate.getFullYear() - birth_date.getFullYear();
  }

  setCurrentContact(contact: Contacts){
    this.current_contact = contact;
  }

  deleteContact(contact: Contacts){
    Swal.fire({
      title: '¿Estas seguro de eliminar este contacto?',
      text: 'Si quieres volverlo a ver tendras que volverlo a registrar!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar!',
      cancelButtonText: 'No, conservarlo'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Eliminado!',
          'El contacto seleccionado ha sido eliminado.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'Tu contacto no ha sido borrado :)',
          'error'
        )
      }
    })
  }

  updateContact(contact: Contacts){
    Swal.fire(
      'Actualizado!',
      'Los datos de tu contacto han sido actualizados.',
      'success'
    )
  }

  createContact(){
    Swal.fire(
      'Registrado!',
      'Se ha registrado el contacto satisfactoriamente.',
      'success'
    )
  }
}
