import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class NodeMailer {
  private readonly transporter: any;
  constructor() {
    this.transporter = createTransport({
      host: process.env.MAILTRAP_HOST,
      port: Number(process.env.MAILTRAP_PORT),
      auth: {
        user: process.env.MAILTRAP_USER as string,
        pass: process.env.MAILTRAP_PASS as string,
      },
    });
  }

  async sendMail(options: {
    from?: string;
    to: string;
    subject: string;
    text: string;
  }) {
    this.transporter.sendMail(
      { from: 'test@test.com', ...options },
      function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      },
    );
  }
}
