import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatToolbarModule, MatCheckboxModule, MatCardModule } from '@angular/material';

@NgModule({
imports: [MatButtonModule, MatInputModule, MatToolbarModule, MatCheckboxModule, MatCardModule],
exports: [MatButtonModule, MatInputModule, MatToolbarModule, MatCheckboxModule, MatCardModule]
})
export class MaterialModule { }
