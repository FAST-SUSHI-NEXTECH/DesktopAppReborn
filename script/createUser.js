import {ip} from '../conf.js';

export async function createUser(last_name, first_name, username, password, email, tel) {
    try {
        const response = await fetch(ip + '/user/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({last_name, first_name, username, password, email, tel})
        });

        const statusCode = response.status; // Récupérer le code HTTP

        if (statusCode == 200) {
            return "User crée";
        } else {
            if (statusCode == 401) {
                return "Erreur 401";
            } else {
                return "Error";
            }
        }
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur:', error);
        throw error; // Propager l'erreur pour la gérer à un niveau supérieur si nécessaire
    }
}