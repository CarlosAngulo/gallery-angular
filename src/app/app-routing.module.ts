import { GalleryComponent } from './gallery/gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
	{
		path: '',
		component: GalleryComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	],
	declarations: []
})
export class AppRoutingModule {
}
