import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyRoseComponent } from './modify-rose.component';

describe('ModifyRoseComponent', () => {
  let component: ModifyRoseComponent;
  let fixture: ComponentFixture<ModifyRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyRoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
