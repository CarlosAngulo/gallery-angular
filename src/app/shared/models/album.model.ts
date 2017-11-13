import { GalleryElement } from './gallery-element.model';
export class Album {
	constructor(
		public id: number,
		public photos: GalleryElement[]
	){}
}