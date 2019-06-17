import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Contato } from '../entidade/contato';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-contato-lista',
  templateUrl: './contato-lista.page.html',
  styleUrls: ['./contato-lista.page.scss'],
})
export class ContatoListaPage implements OnInit {
  listaContatos: Observable<Contato[]>;
  constructor(private fire: AngularFireDatabase) {
    this.listaContatos = this.fire.list<Contato>('contato').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()
      })))
    );

  }

  ngOnInit() {
  }



}
