import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService, MessageService } from '../../common/services';
import { User } from '../../common/models/user';
import { Constants } from '../../common/Constant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  viewProviders: [LoginService]
})
export class LoginComponent implements OnInit {

  public dataUser: User;

  constructor(private _router: Router,
    private _loginService: LoginService, private _messageServices: MessageService) {
      this.dataUser = new User('', '');
     }

  ngOnInit() {
  }

  login(): void {
    this._messageServices.showLoading();
    this._loginService.authenticate(this.dataUser).subscribe(loginRs => {
      this._messageServices.hideLoading();
      if (loginRs) {
        localStorage.setItem('user', JSON.stringify(loginRs));
        this._messageServices.hideLoading();
        this._router.navigate(['/dashboard']);
    } else {
      this._messageServices.openAlert(Constants.Messages.LOGIN_FAILED, Constants.Messages.LOGIN_FAILED_MESSAGE);
    }
    });
  }
}
