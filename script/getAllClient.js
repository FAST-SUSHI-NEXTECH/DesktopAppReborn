import {ip} from '../conf.js';

// export async function getAllClient() {
//
//     try {
//         const response = await fetch(ip + '/user/client', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': "Bearer " + sessionStorage.getItem('token')
//             },
//         });
//
//         // Vérifiez si la requête a réussi
//         if (!response.ok) {
//             throw new Error('La requête a échoué');
//         }
//
//         // Supposons que 'response' soit l'objet Response que vous avez reçu
//         response.json().then(function(data) {
//             console.log(data);
//
//             return data;
//         }).catch(function(error) {
//             // Gérer les erreurs de parsing JSON ou d'autres erreurs liées à la réponse
//             console.log('Erreur lors de la récupération des données JSON :', error);
//             return null;
//         });
//
//
//     } catch (error) {
//         alert("catch getAllClient");
//         alert(error);
//         console.log(error);
//         return null;
//     }
// }

export async function getAllClient() {
    try {
        const response = await fetch(ip + '/user/client', {
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
        console.log(data);
        return (data);
    } catch (error) {
        alert("catch getAllClient");
        alert(error);
        console.log(error);
        return null; // Renvoie null en cas d'erreur
    }
}
