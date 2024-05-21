import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoseFormComponent } from './rose-form.component';

describe('RoseFormComponent', () => {
  let component: RoseFormComponent;
  let fixture: ComponentFixture<RoseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoseFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
