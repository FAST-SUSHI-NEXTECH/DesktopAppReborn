import {ip} from '../conf.js';

export async function getOrderCount() {
    let nbrClient;

    try {
        const response = await fetch(ip + '/order/count', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        const responseData = await response.json();
        const selectedObject = responseData[0];
        const nbr = selectedObject.total_order.toString();
        return nbr;
    } catch (error) {
        console.error(error);
        return null;
    }
}