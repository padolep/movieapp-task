import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoaderComponent } from './show-loader.component';

describe('ShowLoaderComponent', () => {
  let component: ShowLoaderComponent;
  let fixture: ComponentFixture<ShowLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowLoaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
