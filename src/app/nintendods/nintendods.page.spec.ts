import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NintendodsPage } from './nintendods.page';

describe('NintendodsPage', () => {
  let component: NintendodsPage;
  let fixture: ComponentFixture<NintendodsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NintendodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
