import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentToolsComponent } from './agent-tools.component';

describe('AgentToolsComponent', () => {
  let component: AgentToolsComponent;
  let fixture: ComponentFixture<AgentToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
