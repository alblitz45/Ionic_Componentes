import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WiiPage } from './wii.page';

describe('WiiPage', () => {
  let component: WiiPage;
  let fixture: ComponentFixture<WiiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WiiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
