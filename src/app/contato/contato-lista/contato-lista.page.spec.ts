import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoListaPage } from './contato-lista.page';

describe('ContatoListaPage', () => {
  let component: ContatoListaPage;
  let fixture: ComponentFixture<ContatoListaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatoListaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
