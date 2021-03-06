// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// Translate Module
import { TranslateModule } from '@ngx-translate/core';
// Auth
import { ModuleGuard } from '../../../../core/auth';

// Material
import {
	MatInputModule,
	MatPaginatorModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule,
	MatSelectModule,
	MatMenuModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatIconModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule,
	MatTooltipModule,
	MatStepperModule,
	MatDialogRef,
	MatButtonToggleGroup,
} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPermissionsModule } from 'ngx-permissions';

// Component
import { PruebaComponent } from './prueba.component';
import {PartialsModule} from '../../../partials/partials.module';
import { ListPersonaComponent } from './list-persona/list-persona.component';
import { CrearPersonaComponent } from './list-persona/crear-persona/crear-persona.component'
const routes: Routes = [
	{
		path: '',
		component: PruebaComponent,
		// canActivate: [ModuleGuard],
		// data: { moduleName: 'ecommerce' },
		children: [
			{
				path: '',
				redirectTo: '',
				pathMatch: 'full'
			},
			{
				path: 'list-persona',
				component: ListPersonaComponent
			},
			{
				path: 'new-persona',
				component: CrearPersonaComponent
			},
		]
	}
];


@NgModule({
	imports: [
		CommonModule,
    	RouterModule.forChild(routes),
    	MatDialogModule,
    	CommonModule,
    	NgxPermissionsModule.forChild(),
		RouterModule.forChild(routes),
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forChild(),
		MatButtonModule,
		MatMenuModule,
		MatSelectModule,
    	MatInputModule,
		MatTableModule,
		MatAutocompleteModule,
		MatRadioModule,
		MatIconModule,
		MatNativeDateModule,
		MatProgressBarModule,
		MatDatepickerModule,
		MatCardModule,
		MatPaginatorModule,
		MatSortModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatSnackBarModule,
		MatTabsModule,
		MatTooltipModule,
		MatButtonToggleModule,
		NgbProgressbarModule,
		
		MatStepperModule,
		PartialsModule
  ],
  providers:[
	ModuleGuard,
	{ provide: MatDialogRef, useValue: {} },
    {
			provide: MAT_DIALOG_DEFAULT_OPTIONS,
			useValue: {
				hasBackdrop: true,
				panelClass: 'kt-mat-dialog-container__wrapper',
				height: 'auto',
				width: '900px'
			}
		},
  ],
declarations: [
	PruebaComponent,
	ListPersonaComponent,
	CrearPersonaComponent
  ],
  entryComponents: [
  ]
})
export class PruebaModule {}
