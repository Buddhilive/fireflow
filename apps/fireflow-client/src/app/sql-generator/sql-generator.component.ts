import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'fireflow-sql-generator',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent {
  code = 'SELECT * FROM users';
  languages = ['sql'];
  prompt = '';

  constructor(private httpClient: HttpClient) { }

  generateQuery() {
    if (this.prompt.length > 0) {
      this.httpClient.post('/api/gen-sql', { content: this.prompt }).subscribe({
        next: (data: any) => {
          this.code = data.content;
        },
        error: (err) => console.log(err)
      });
    }
  }
}
