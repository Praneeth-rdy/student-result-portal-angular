import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyResultComponent } from './modify-result.component';

describe('ModifyResultComponent', () => {
  let component: ModifyResultComponent;
  let fixture: ComponentFixture<ModifyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
