import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlGeneratorComponent } from './sql-generator.component';

describe('SqlGeneratorComponent', () => {
  let component: SqlGeneratorComponent;
  let fixture: ComponentFixture<SqlGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqlGeneratorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SqlGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
