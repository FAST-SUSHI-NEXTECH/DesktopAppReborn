
export function IsJWTadmin(token) {
    const data = JSON.parse(atob(token.split('.')[1]))
    if (data.perm===3) {
        return true;
    } else {
        return false;
    }
}
