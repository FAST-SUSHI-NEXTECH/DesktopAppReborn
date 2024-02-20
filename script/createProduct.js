import {ip} from '../conf.js';

export async function createProduct(type_product, product_name, description, price, quantity) {
    try {
        const response = await fetch(ip + '/product/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({type_product, product_name, description, price, quantity})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        console.log(statusCode)
        return statusCode;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}