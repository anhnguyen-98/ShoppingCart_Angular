export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;

    constructor(id: number, name: string, description: string = "", price: number = 0, imageUrl: string = "https://cdn.shopify.com/s/files/1/1245/1481/products/600_HERO_WEB_FIRST.jpg?v=1597712912") {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
    }
}
