export default class ApiResponse<T> {
    success: boolean;
    httpStatusCode: number;
    message?: string;
    data?: T;

    constructor(success: boolean, httpStatusCode: number, message?: string, data?: T) {
        this.success = success
        this.message = message
        this.data = data
        this.httpStatusCode = httpStatusCode
    }
}