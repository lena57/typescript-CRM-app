//import { IClient } from '../../../interfaces/Interfaces';
import {post} from '../../../utils/httpMethods';

export async function queryClientCreate(payload: any): Promise<any> {
    return post({ url: 'http://localhost:5001/client', data: payload });
}