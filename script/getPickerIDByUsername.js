import {ip} from '../conf.js';

export async function getPickerIDByUsername(username) {
    try {
        const response = await fetch(ip + '/user/picker/username', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + sessionStorage.getItem('token')
            },
            body: JSON.stringify({username})
        });

        // Vérifiez si la requête a réussi
        if (!response.ok) {
            throw new Error('La requête a échoué');
        }

        let rep = await response.json();
        return rep[0].id_picker;
    } catch (error) {
        console.error(error);
        return 0;
    }
}