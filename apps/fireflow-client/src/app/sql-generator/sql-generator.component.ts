import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ISQLPrompt } from '../_shared/interfaces/sql-prompt.interface';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'fireflow-sql-generator',
  standalone: true,
  imports: [
    CommonModule,
    HighlightModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    InputTextModule,
    PanelModule
  ],
  templateUrl: './sql-generator.component.html',
  styleUrl: './sql-generator.component.scss',
})
export class SqlGeneratorComponent implements AfterViewInit {

  code = '';
  languages = ['sql'];
  prompt = '';
  copyBtn = {
    icon: 'pi pi-copy',
    severity: 'secondary',
    disabled: true
  };

  constructor(private httpClient: HttpClient) { }

  ngAfterViewInit(): void {
      this.copyBtn.icon = 'pi pi-copy';
      this.copyBtn.severity = 'secondary';
  }

  generateQuery() {
    if (this.prompt.length > 0) {
      this.code = 'Generating SQL Query...';
      const promptRequest = `provide the sql query for the following task: ${this.prompt}`;
      this.httpClient.post('/api/gen-sql', { content: promptRequest }).subscribe({
        next: (data) => {
          const content = (data as ISQLPrompt).content;
          this.code = this.removeCodeBlockMarkers(content);
          this.copyBtn.disabled = false;
        },
        error: (err) => console.log(err)
      });
    } else {
      alert('Prompt is empty!');
    }
  }

  private removeCodeBlockMarkers(str: string) {
    return str.replace(/^```sql\s+|\s+```$/g, "");
  }

  clearInput() {
    this.prompt = '';
    this.copyBtn.disabled = true;
    this.code = '';
  }

  async copyCode() {
    try {
      if (!navigator.clipboard) {
        throw new Error('Clipboard API not supported');
      }
      await navigator.clipboard.writeText(this.code);
      this.copyBtn.icon = 'pi pi-check';
      this.copyBtn.severity = 'success';
      this.copyBtn.disabled = true;
      setTimeout(() => {
        this.copyBtn.icon = 'pi pi-copy';
        this.copyBtn.severity = 'secondary';
        if(this.code.length > 0) {
          this.copyBtn.disabled = false;
        }
      }, 5000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  }
}
