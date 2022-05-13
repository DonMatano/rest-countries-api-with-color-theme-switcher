export interface IHttpService {
  // eslint-disable-next-line no-unused-vars
  getHttpRequest<Response>(url: string): Promise<Response> ;
}
