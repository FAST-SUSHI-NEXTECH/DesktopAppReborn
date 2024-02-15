import {ip} from '../conf.js';

export async function upgradeUser(user_id) {
    try {
        const response = await fetch(ip + '/user/upgrade', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({user_id})
        });

        return response.status;
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}