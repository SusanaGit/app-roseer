import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRoseComponent } from './new-rose.component';

describe('NewRoseComponent', () => {
  let component: NewRoseComponent;
  let fixture: ComponentFixture<NewRoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRoseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
