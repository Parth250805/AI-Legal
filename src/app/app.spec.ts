import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the legal assistant panel on the home route', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement?.textContent).toContain('Select Language');
    expect(harness.routeNativeElement?.textContent).toContain('Start Now');
  });

  it('should render the case details route', async () => {
    const harness = await RouterTestingHarness.create('/case-details');
    expect(harness.routeNativeElement?.textContent).toContain('Case Details');
    expect(harness.routeNativeElement?.textContent).toContain('Generate Case Analysis');
  });

  it('should render the action plan route', async () => {
    const harness = await RouterTestingHarness.create('/action-plan');
    expect(harness.routeNativeElement?.textContent).toContain('Action Plan');
    expect(harness.routeNativeElement?.textContent).toContain('Export Action Plan');
  });
});
