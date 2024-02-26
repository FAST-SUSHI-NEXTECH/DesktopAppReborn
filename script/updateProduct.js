import {ip} from '../conf.js';

export async function updateProduct(id_product, type_product, product_name, description, price, quantity) {
    try {
        const response = await fetch(ip + '/product/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({id_product, type_product, product_name, description, price, quantity})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        return statusCode;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}