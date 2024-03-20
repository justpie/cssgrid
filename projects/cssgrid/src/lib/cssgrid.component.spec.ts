import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssgridComponent } from './cssgrid.component';

describe('CssgridComponent', () => {
  let component: CssgridComponent;
  let fixture: ComponentFixture<CssgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CssgridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CssgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
