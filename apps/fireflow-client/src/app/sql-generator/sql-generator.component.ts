import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'fireflow-sql-generator',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule
  ],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent {
  code = 'SELECT * FROM users';
  languages = ['sql'];
}
