import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ps3Page } from './ps3.page';

describe('Ps3Page', () => {
  let component: Ps3Page;
  let fixture: ComponentFixture<Ps3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Ps3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
