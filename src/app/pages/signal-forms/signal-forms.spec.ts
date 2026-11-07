import { TestBed } from '@angular/core/testing';
import { SignalFormsComponent } from './signal-forms';

describe('SignalFormsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalFormsComponent]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SignalFormsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should validate name length', () => {
    const fixture = TestBed.createComponent(SignalFormsComponent);
    const component = fixture.componentInstance;
    component.name.set('A');
    expect(component.nameError()).toBe('Name must be at least 3 characters long');
    component.name.set('Angular');
    expect(component.nameError()).toBeNull();
  });

  it('should validate email format', () => {
    const fixture = TestBed.createComponent(SignalFormsComponent);
    const component = fixture.componentInstance;
    component.email.set('invalid-email');
    expect(component.emailError()).toBe('Invalid email format');
    component.email.set('dev@angular.dev');
    expect(component.emailError()).toBeNull();
  });
});
