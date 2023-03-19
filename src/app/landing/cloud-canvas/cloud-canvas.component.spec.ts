import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudCanvasComponent } from './cloud-canvas.component';

describe('CloudCanvasComponent', () => {
  let component: CloudCanvasComponent;
  let fixture: ComponentFixture<CloudCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudCanvasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloudCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
