import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'stock-inventory',
  styleUrls: ['stock-inventory.component.scss'],
  template: `
    <div class="stock-inventory">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

          <div formGroupName="store">
            <input type="text" placeholder="Branch ID" formControlName="branch">
            <input type="text" placeholder="Manager Code" formControlName="code">
          </div>
          <div class="stock-inventory_buttons">
            <button type="submit" [disabled]="form.invalid">
              Order stock
            </button>
          </div>

          <pre>{{ form.value | json }}</pre>

        </form>

    </div>
  `
})
export class StockInventoryComponent {
    form = new FormGroup({
      store: new FormGroup({
        branch: new FormControl('B192'),
        code: new FormControl('1234')
      })
    })

    onSubmit(){
      console.log('Submit :', this.form.value);
    }
}