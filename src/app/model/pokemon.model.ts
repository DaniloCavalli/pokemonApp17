export class Pokemon {
    id: string;
    name: string;
    imagePath?: string;
    abilities?: string[];
    url?: string;

    constructor( id: string, name: string, imagePath: string, abilities: string[] ){
        this.id = id;
        this.name = name;
        this.imagePath = imagePath;
        this.abilities = abilities
    }
}