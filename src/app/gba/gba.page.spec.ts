import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GbaPage } from './gba.page';

describe('GbaPage', () => {
  let component: GbaPage;
  let fixture: ComponentFixture<GbaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GbaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
