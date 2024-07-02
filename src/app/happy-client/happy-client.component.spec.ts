import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyClientComponent } from './happy-client.component';

describe('HappyClientComponent', () => {
  let component: HappyClientComponent;
  let fixture: ComponentFixture<HappyClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyClientComponent]
    });
    fixture = TestBed.createComponent(HappyClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
