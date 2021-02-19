interface IMailTo{
    name: string;
    email: string;

}
interface IMailMessage{
    subject: string;
    body: string;
    attachment?: string[];
}
// Data Transfer Object (DDD)
interface IMessageDTO{
    to: IMailTo;
    message: IMailMessage;
}
//Interface para classe EmailService
interface IEmailService{
    sendMail( request: IMessageDTO): void;
}

class EmailService implements IEmailService{
    sendMail({to, message}: IMessageDTO ){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
}
/* class EmailService{
    sendMail(to: IMailTo, message: IMailMessage){
        console.log(`Email enviado para ${to.name}: ${message.subject}`)
    }
} */
export default EmailService;