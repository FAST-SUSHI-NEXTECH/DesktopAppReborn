import {ip} from '../conf.js';

export async function getOrderContent(id_order) {
    try {
        const response = await fetch(ip + '/order/details', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({id_order})
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        return (data);
    } catch (error) {
        alert(error);
        console.log(error);
        return null; // Renvoie null en cas d'erreur
    }
}