export const getAuthHeaders = () => {
    let xAuthToken = '';
    let xAuthPhone = '';

    try {
        let admin = localStorage.getItem('admin');
        admin = JSON.parse(admin);
        xAuthToken = admin.loginToken;
        xAuthPhone = admin.phoneNumber;
    } catch (error) {
        
    }
    return {
        'x-auth-token': xAuthToken,
        'x-auth-phone': xAuthPhone,
    }
}