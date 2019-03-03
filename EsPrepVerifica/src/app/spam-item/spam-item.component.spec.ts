import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpamItemComponent } from './spam-item.component';

describe('SpamItemComponent', () => {
  let component: SpamItemComponent;
  let fixture: ComponentFixture<SpamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
