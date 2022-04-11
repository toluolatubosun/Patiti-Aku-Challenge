
const response = (message: string, data?: any, success?:boolean) => {
    return {
        message: formatMesaage(message),
        data: data || null,
        success: success == null ? true : success
    };
}

const formatMesaage = (str: string) => {
    if (!str) return "";

    // Make first letter capital
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default response;