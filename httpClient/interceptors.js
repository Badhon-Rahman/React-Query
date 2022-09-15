
export default function initInterceptors(httpService) {

    httpService.interceptors.response.use(
        (res) => {
            console.log('sc');
            return res;
        },
        (error) => {
            console.log('er');
            if (error.response) {
                // return handleError(error.response.status);
                return Promise.reject(error.response);
            } else {
                return Promise.reject(error);
            }
        }
    );
}
