import { Component } from '@angular/core';

@Component({
    selector: 'alert-dialog',
    template: `<h1 mat-dialog-title>Dialog with elements</h1>
            <div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>
            <div mat-dialog-actions>
                <button mat-button mat-dialog-close>Close</button>
            </div>`
})
export class DailogComponent { }