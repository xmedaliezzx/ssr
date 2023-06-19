import { SocketRdvReqDTO } from '@DTOs/requests/socket-rdv-req.dto';
import { Injectable, inject } from '@angular/core';
import { io, Socket } from 'socket.io-client';

import { ISocket } from '../interfaces/Isocket';
import { AppStateInterface } from '@store/app.state';
import { Store } from '@ngrx/store';
import { getAccessToken } from '@store/user/user.selector';
import { filter } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private socket: Socket;
  _store = inject(Store<AppStateInterface>);
  token: any;
  options: any;
  constructor() {
    this._store
      .select(getAccessToken)
      .pipe(filter((token) => !!token))
      .subscribe((token) => {
        this.token = token;
        this.setupSocketConnection();
      });
    // this.socketErrorRdvResponse();
    // this.responsefromSendingInvitation();
  }

  // sendRdv(dataAppointments: SocketRdvReqDTO) {
  //   this._socket.emit('sendInvitation', dataAppointments);
  // }

  // connect(): void {
  //   console.log('socket connection started ...');

  //   this._socket.on('connect', () => {
  //      console.log('socket connected with id : ', this.socket.id);
  //   });
  // }

  // socketErrorRdvResponse() {
  //   this._socket.on('ERR_sendInvitation', (data: any) => {
  //     // // console.log('error socket response >> ', data);
  //   });
  // }

  // responsefromSendingInvitation() {
  //   this._socket.on('responseSendInvitation', (data: any) => {
  //     // // console.log('response recieved after sending invitation >> ', data);
  //   });
  // }

  private setupSocketConnection(): void {
    // Connect to the Socket.IO server
    this.socket = io(environment.socketURL, {
      query: {
        token: this.token,
      },
    });
    this.socket.on('connect', () => {
      console.log('socket connected with id : ', this.socket.id);
    });

    // Handle connection error
    this.socket.on('connect_error', (error: any) => {
      console.error('Socket.IO connection error:', error);
      // Handle the error as needed (e.g., display an error message to the user)
    });

    // Handle custom error event emitted by the server
    this.socket.on('error', (errorMessage: string) => {
      console.error('Socket.IO server error:', errorMessage);
      // Handle the error as needed
    });

    // Handle reconnection
    this.socket.on('reconnect', (attemptNumber: number) => {
      console.log('Socket.IO reconnected after', attemptNumber, 'attempts');
      // Additional logic after reconnection if needed
    });

    // Handle disconnection
    this.socket.on('disconnect', (reason: string) => {
      console.log('Socket.IO disconnected:', reason);
      // Additional logic after disconnection if needed
    });
  }

  // ngOnDestroy(): void {
  //   // Disconnect from the Socket.IO server when the component is destroyed
 
  //   this.socket.disconnect();
  // }
}
