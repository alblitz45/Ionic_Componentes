import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ps2Page } from './ps2.page';

describe('Ps2Page', () => {
  let component: Ps2Page;
  let fixture: ComponentFixture<Ps2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
