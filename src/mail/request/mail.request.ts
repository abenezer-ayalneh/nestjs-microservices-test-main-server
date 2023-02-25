export class MailSendRequest {
  lang: string;
  to: string;
  from: string;
  subject: string;
  template: string;
  context?: object;
}
