import { Request, Response} from 'express';

const users =[
    {name: 'Manoela', email : 'manoela@gmail.com.br'},
];

export default {
    async index(req: Request, res: Response) {

        return res.json(users);
    }
}