import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsComponent } from './about-us.component';

// describe('AboutUsComponent', () => {
//   let component: AboutUsComponent;
//   let fixture: ComponentFixture<AboutUsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [AboutUsComponent],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AboutUsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
// function beforeEach(arg0: () => Promise<void>) {
//   throw new Error('Function not implemented.');
// }

// function expect(component: AboutUsComponent) {
//   throw new Error('Function not implemented.');
// }

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutUsComponent } from './about-us.component';

describe('AboutUsComponent', () => {
  let component: AboutUsComponent;
  let fixture: ComponentFixture<AboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutUsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

