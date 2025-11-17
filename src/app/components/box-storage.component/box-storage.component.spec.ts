import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxStorageComponent } from './box-storage.component';

describe('BoxStorageComponent', () => {
  let component: BoxStorageComponent;
  let fixture: ComponentFixture<BoxStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoxStorageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
