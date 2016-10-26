import { Mailer } from 'denali-mailer';

export default class TestMailer extends Mailer {
  from = 'from@email.com';
  to = 'to@email.com';
}
