import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SahredTableComponent } from './sahred-table.component';

describe('SahredTableComponent', () => {
  let component: SahredTableComponent;
  let fixture: ComponentFixture<SahredTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SahredTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SahredTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
