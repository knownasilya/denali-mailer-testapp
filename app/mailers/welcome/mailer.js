import { Mailer } from 'denali-mailer';

export default class WelcomeMailer extends Mailer {
  from = 'noreply@blah.com';
  to = 'iradchenko@appgeo.com';
}
