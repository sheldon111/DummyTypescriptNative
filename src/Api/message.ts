class Message
{
    constructor(type: string, payload: {}) {
        this.type = type;
        this.payload = payload;
    }
    type: string;
    payload: {};
}

export default Message;