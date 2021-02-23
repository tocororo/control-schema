
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// //import { LayoutModule } from '@angular/cdk/layout';
// import { MatAutocompleteModule } from '@angular/material/autocomplete';
// //import { MatButtonModule } from '@angular/material/button';
// //import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
// import { MatCheckboxModule } from '@angular/material/checkbox';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
// import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
// //import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
// //import { MatMenuModule } from '@angular/material/menu';
// import { MatPaginatorModule } from '@angular/material/paginator';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
// //import { MatSidenavModule } from '@angular/material/sidenav';
// //import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// //import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatTableModule } from '@angular/material/table';
// import { MatSortModule } from '@angular/material/sort';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatListModule } from '@angular/material/list';
// import { MatTreeModule } from '@angular/material/tree';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatStepperModule } from '@angular/material/stepper'
// import { MatRippleModule } from '@angular/material/core';

import { ActionButtonComponent } from './action/button/button-action.component';
import { ContainerPanelComponent } from './container/panel/panel-container.component';
import { ContainerSimpleComponent } from './container/simple/simple-container.component';
import { InputEmailComponent } from './input/email/email-input.component';
import { InputIdentifierComponent } from './input/identifier/identifier-input.component';
import { InputIssnComponent } from './input/issn/issn-input.component';
import { InputRnpsComponent } from './input/rnps/rnps-input.component';
import { InputSelectComponent } from './input/select/select-input.component';
import { InputTextComponent } from './input/text/text-input.component';
import { InputUrlComponent } from './input/url/url-input.component';
import { GetViewContainerDirective } from './utils/get-view-container.directive';
import { EqualLengthDirective } from './utils/validator';

@NgModule({
	declarations: [
		ActionButtonComponent,
		ContainerPanelComponent,
		ContainerSimpleComponent,
		InputEmailComponent,
		InputIdentifierComponent,
		InputIssnComponent,
		InputRnpsComponent,
		InputSelectComponent,
		InputTextComponent,
		InputUrlComponent,
		GetViewContainerDirective,
		EqualLengthDirective
	],

	/* In order to ensure that the compiler still generates a factory for all dynamically loaded components. */
	entryComponents: [
		ActionButtonComponent,
		ContainerPanelComponent,
		ContainerSimpleComponent,
		InputTextComponent,
		InputEmailComponent,
		InputIdentifierComponent,
		InputIssnComponent,
		InputRnpsComponent,
		InputSelectComponent,
		InputUrlComponent
	],

	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

// 		LayoutModule,
// 		MatButtonModule,
// 		MatButtonToggleModule,
// 		MatMenuModule,
// 		MatToolbarModule,
 		MatTooltipModule,
 		MatIconModule,
 		MatCardModule,
 		MatInputModule,
// 		MatCheckboxModule,
		MatFormFieldModule,
// 		MatDialogModule,
// 		MatGridListModule,
// 		MatSnackBarModule,
// 		MatProgressBarModule,
// 		MatProgressSpinnerModule,
// 		MatSidenavModule,
// 		MatTabsModule,
// 		MatChipsModule,
// 		MatTableModule,
// 		MatSortModule,
// 		MatPaginatorModule,
// 		MatSlideToggleModule,
 		MatSelectModule,
// 		MatOptionModule,
// 		MatAutocompleteModule,
// 		MatExpansionModule,
// 		MatDatepickerModule,
// 		MatNativeDateModule,
// 		MatListModule,
// 		MatTreeModule,
// 		MatBadgeModule,
// 		MatStepperModule,
// 		MatRippleModule
	],

	exports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,

// 		LayoutModule,
// 		MatButtonModule,
// 		MatButtonToggleModule,
// 		MatMenuModule,
// 		MatToolbarModule,
 		MatTooltipModule,
 		MatIconModule,
 		MatCardModule,
 		MatInputModule,
// 		MatCheckboxModule,
		MatFormFieldModule,
// 		MatDialogModule,
// 		MatGridListModule,
// 		MatSnackBarModule,
// 		MatProgressBarModule,
// 		MatProgressSpinnerModule,
// 		MatSidenavModule,
// 		MatTabsModule,
// 		MatChipsModule,
// 		MatTableModule,
// 		MatSortModule,
// 		MatPaginatorModule,
// 		MatSlideToggleModule,
 		MatSelectModule,
// 		MatOptionModule,
// 		MatAutocompleteModule,
// 		MatExpansionModule,
// 		MatDatepickerModule,
// 		MatNativeDateModule,
// 		MatListModule,
// 		MatTreeModule,
// 		MatBadgeModule,
// 		MatStepperModule,
// 		MatRippleModule,

		ActionButtonComponent,
		ContainerPanelComponent,
		ContainerSimpleComponent,
		InputEmailComponent,
		InputIdentifierComponent,
		InputIssnComponent,
		InputRnpsComponent,
		InputSelectComponent,
		InputTextComponent,
		InputUrlComponent,
		GetViewContainerDirective,
		EqualLengthDirective
	]
})
export class ControlSchemaModule
{ }
