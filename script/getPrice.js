import {ip} from '../conf.js';

export async function getPrice(id_order) {
    try {
        const response = await fetch(ip + '/order/total/id', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({ id_order })
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        const data = response.json();
        return data;
    } catch (error) {
        console.error(error);
        return 0;
    }
}
