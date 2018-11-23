
class WebSocketApi {
    socket: WebSocket;
    socketAddress: string;

    constructor(socketAddress: string)
    {
        this.socketAddress = socketAddress;
        this.socket = new WebSocket(socketAddress,'');


        this.open();
        this.onMessage();
        this.onClose();
        this.onError();
    }
    //idea is to pass in methods for each possible outcome to detach logic ~not sure if this is the best way to go about it
    open(){
        this.socket.onopen = () => {

            this.socket.send('Give me what I need22222');
        }
    }

    onMessage(){
        this.socket.onmessage = (message) => {
            console.log('Message Received: ' + message.data);
        }
    }

    onError(){
        this.socket.onerror = (message) => {
            // an error occurred
            console.log(message);
        };
    }

    onClose(){
        this.socket.onclose = (e) => {
            // connection closed
            console.log(e.code, e.reason);
        };
    }

    send(message:string)
    {
        if(this.socket.readyState !== this.socket.OPEN)
        {
            console.log('Warning, socket was in a closed state. Attempting to open a new socket');
            this.socket = new WebSocket(this.socketAddress);
            this.socket.onopen = () => {
                this.socket.send(message);
            };
        }
        else
        {
            this.socket.send(message);
        }
    }
}

export default WebSocketApi;


