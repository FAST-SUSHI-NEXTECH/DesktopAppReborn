import {ip} from '../conf.js';

export async function getLogin(username, password) {
    try {
        const response = await fetch(ip + '/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, password})
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        // Extrait les données de la réponse
        const responseData = await response.json();
        return responseData.token;
    } catch (error) {
        console.error(error);
        return null;
    }
}
