export class Product { 
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: [];
    length: number;
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;

    constructor(data: any = null) {
        this.id = data?.id;
        this.brand = data?.brand;
        this.category = data?.category;
        this.description = data?.description;
        this.discountPercentage = data?.discountPercentage;
        this.images = data?.images;
        this.length = data?.length;
        this.price = data?.price;
        this.rating = data?.rating;
        this.stock = data?.stock;
        this.thumbnail = data?.thumbnail;
        this.title = data?.title;
    }
}