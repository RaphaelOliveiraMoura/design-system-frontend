import { HttpRequest } from './types';
import * as axios from './implementations/axios';

export const httpRequest: HttpRequest = axios.httpRequest;
