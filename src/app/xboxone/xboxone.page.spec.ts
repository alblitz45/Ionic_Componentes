import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XboxonePage } from './xboxone.page';

describe('XboxonePage', () => {
  let component: XboxonePage;
  let fixture: ComponentFixture<XboxonePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
