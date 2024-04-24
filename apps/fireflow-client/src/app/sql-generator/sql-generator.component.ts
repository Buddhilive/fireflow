import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ISQLPrompt } from '../_shared/interfaces/sql-prompt.interface';

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
export class SqlGeneratorComponent implements AfterViewInit {

  @ViewChild('copybtn') copyBtn!: ElementRef<HTMLButtonElement>;

  code = 'we';
  languages = ['sql'];
  prompt = '';

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
      this.copyBtn.nativeElement.innerHTML = 'Copy';
  }

  generateQuery() {
    this.code = 'Generating SQL Query...';
    if (this.prompt.length > 0) {
      const promptRequest = `provide the sql query for the following task: ${this.prompt}`;
      this.httpClient.post('/api/gen-sql', { content: promptRequest }).subscribe({
        next: (data) => {
          const content = (data as ISQLPrompt).content;
          this.code = this.removeCodeBlockMarkers(content);
        },
        error: (err) => console.log(err)
      });
    }
  }

  private removeCodeBlockMarkers(str: string) {
    return str.replace(/^```sql\s+|\s+```$/g, "");
  }

  clearInput() {
    this.prompt = '';
  }

  async copyCode() {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API not supported');
      }
      await navigator.clipboard.writeText(this.code);
      this.copyBtn.nativeElement.innerHTML = 'Copied';
      setTimeout(() => this.copyBtn.nativeElement.innerHTML = 'Copy', 5000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }
}
