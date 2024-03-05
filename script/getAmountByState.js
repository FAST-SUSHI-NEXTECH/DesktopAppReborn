import {ip} from '../conf.js';

export async function getAmountByState(state) {
    try {
        const response = await fetch(ip + '/order/total/state', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({ state })
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        return response.json();
    } catch (error) {
        console.error(error);
        return 0;
    }
}
