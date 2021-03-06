import AbstractResponse from './AbstractResponse';

export default class AxiosResponse extends AbstractResponse {
  constructor(res) {
    super(res);
    this.status = res.status;
    this.body = res.data;
    this.req = res.request;
    this.bodyHasNoContent = this.body === '';
  }

  getBodyForValidation() {
    if (this.bodyHasNoContent) {
      return null;
    }
    return this.body;
  }
}
