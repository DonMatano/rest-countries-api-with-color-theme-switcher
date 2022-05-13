import { IHttpService } from './IHttpService';

export class FetchHttpService implements IHttpService {
  // eslint-disable-next-line class-methods-use-this
  async getHttpRequest<Response>(url: string): Promise<Response> {
    let response: Response;
    try {
      const res = await fetch(url);
      response = await res.json();
      return response;
    } catch (e) {
      throw new Error(`Error gotten while calling ${url}: error: ${e}`);
    }
  }
}
