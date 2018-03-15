

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'other-root',
    template:`
    
    <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx">
      </ng-container>
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>

    `
})

export class OtherComponent {
    ctx={
        $implicit: 'Juan Perez',
        location: 'PE, Callao'
    }
    
}