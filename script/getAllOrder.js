import {ip} from '../conf.js';

export async function getAllOrder() {
    try {
        const response = await fetch(ip + '/order/all', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
        });

        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        const data = await response.json();
        return (data);
    } catch (error) {
        alert("catch getAllClient");
        alert(error);
        console.log(error);
        return null; // Renvoie null en cas d'erreur
    }
}
