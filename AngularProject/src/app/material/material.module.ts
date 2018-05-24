import { NgModule } from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatMenuModule, MatFormFieldModule,} from '@angular/material';
import {MatCardModule,MatInputModule,MatIconModule,} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule
  ],
  declarations: []
})
export class MaterialModule { }
