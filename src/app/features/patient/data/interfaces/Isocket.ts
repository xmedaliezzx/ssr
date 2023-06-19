
export interface ISocket {
    sendRdv(dataAppointments: any): any;
    socketErrorRdvResponse(): void;
    responsefromSendingInvitation(): void;
}