export class Pokemon {
    id: string;
    name: string;
    imagePath?: string;
    images: any;
    abilities?: any[];
    url?: string;

    constructor( id: string, name: string, imagePath: string, abilities: string[], images: string[] ){
        this.id = id;
        this.images = images;
        this.name = name;
        this.imagePath = imagePath;
        this.abilities = abilities
    }
}