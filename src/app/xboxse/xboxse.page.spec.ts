import { ComponentFixture, TestBed } from '@angular/core/testing';
import { XboxsePage } from './xboxse.page';

describe('XboxsePage', () => {
  let component: XboxsePage;
  let fixture: ComponentFixture<XboxsePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(XboxsePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
