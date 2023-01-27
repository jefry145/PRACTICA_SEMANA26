import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageinitComponent } from './pageinit.component';

describe('PageinitComponent', () => {
  let component: PageinitComponent;
  let fixture: ComponentFixture<PageinitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageinitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageinitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
