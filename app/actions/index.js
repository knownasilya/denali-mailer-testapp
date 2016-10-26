import ApplicationAction from './application';

export default class IndexAction extends ApplicationAction {

  serializer = false;

  respond() {
    let mailer = this.service('mailer');
    debugger;
    console.log(mailer);
    mailer.send('welcome');
    return { message: 'Welcome to Denali!' };
  }

}
