import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato-salvar',
  templateUrl: './contato-salvar.page.html',
  styleUrls: ['./contato-salvar.page.scss'],
})
export class ContatoSalvarPage implements OnInit {
  contato: Contato = new Contato();

  constructor(private fire: AngularFireDatabase, private rota: Router) { }

  ngOnInit() {
  }

  salvar(){
    this.fire.list('contato').push(this.contato);
    this.contato= new Contato();
    this.rota.navigate(["contato-lista"]);
  }
}
