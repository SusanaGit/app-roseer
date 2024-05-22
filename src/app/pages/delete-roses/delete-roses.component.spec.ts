import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRosesComponent } from './delete-roses.component';

describe('DeleteRosesComponent', () => {
  let component: DeleteRosesComponent;
  let fixture: ComponentFixture<DeleteRosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRosesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteRosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
