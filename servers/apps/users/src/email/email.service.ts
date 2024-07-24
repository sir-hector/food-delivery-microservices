import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

type mailOption = {
  subject: string;
  email: string;
  name: string;
  activationCode: string;
  template: string;
};

@Injectable()
export class EmailService {
  constructor(private mailService: MailerService) {}

  async sendMail({
    subject,
    email,
    name,
    activationCode,
    template,
  }: mailOption) {
    await this.mailService.sendMail({
      to: email,
      subject,
      template,
      context: {
        name,
        activationCode,
      },
    });
  }
}
