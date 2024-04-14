import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'fireflow-sql-generator',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    FormsModule
  ],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent {
  code = 'SELECT * FROM users';
  languages = ['sql'];
  prompt = '';
}
