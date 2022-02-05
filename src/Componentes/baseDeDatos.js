

export const PRODUCTS = [
    
    
        {
        id: 0,
        name: "Zapas",
        description: "altas zapas",
        price: 5000,
        img: "https://picsum.photos/200"
        },
        
        {
        id: 1,
        name: "Buzuñios",
        description: "altas buzo",
        price: 10000,
        img: "https://picsum.photos/200"
        },
        
        ]; 

export function getProductos () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(PRODUCTS), 5000)
    });
}
    