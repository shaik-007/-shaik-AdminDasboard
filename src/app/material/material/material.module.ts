import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HighchartsChartModule } from 'highcharts-angular'



const materialComponent = [
                            MatToolbarModule,
                            MatButtonModule,
                            MatIconModule,
                            MatFormFieldModule,
                            MatMenuModule,
                            MatDialogModule,
                            FormsModule,
                            ReactiveFormsModule,
                            MatInputModule,
                            MatBadgeModule,
                            MatCardModule,
                            MatTableModule,
                            MatSidenavModule,
                            MatDividerModule,
                            MatDialogModule,
                            MatListModule,
                            HighchartsChartModule



                          ]


@NgModule({
  declarations: [],
  imports: [materialComponent],
  exports : [materialComponent]
})
export class MaterialModule { }
