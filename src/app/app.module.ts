import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxDatatableModule  } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
	MatCardModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatMenuModule,
	MatIconModule,
	MatFormFieldModule,
	MatButtonModule,
	MatToolbarModule,
	MatSnackBarModule,
	MatNativeDateModule,
	MatInputModule,
	MatSidenavModule,
	MatDialogModule,
	DateAdapter
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgComponent } from './ng/ng.component';

import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
	declarations: [
		AppComponent,
		NgComponent,
		GalleryComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FlexLayoutModule,
		MatCardModule,
		MatCheckboxModule,
		MatDatepickerModule,
		MatMenuModule,
		MatIconModule,
		MatSidenavModule,
		MatFormFieldModule,
		MatButtonModule,
		MatToolbarModule,
		MatSnackBarModule,
		MatInputModule,
		MatNativeDateModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		NgxDatatableModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		SharedModule
	],
	providers: [],
	entryComponents: [  ],
	bootstrap: [AppComponent]
})
export class AppModule { }
