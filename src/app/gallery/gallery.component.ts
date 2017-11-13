import { Album } from './../shared/models/album.model';
import { Observable } from 'rxjs/Observable';
import { GalleryElement } from './../shared/models/gallery-element.model';
import { GalleryService } from './../shared/services/gallery.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	albums$: Observable<Album[]>;

	constructor(private service: GalleryService) { }

	ngOnInit() {
		this.albums$ = this.service.getAll();
	}

}
