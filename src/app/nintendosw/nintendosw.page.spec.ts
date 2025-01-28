import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NintendoswPage } from './nintendosw.page';

describe('NintendoswPage', () => {
  let component: NintendoswPage;
  let fixture: ComponentFixture<NintendoswPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendoswPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
