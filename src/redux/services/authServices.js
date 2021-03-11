import { fetchAPI } from '../../helper/fetcher';

export const AuthServices = (req) => fetchAPI({ type : "POST", url :'/api/login', params : req })
export const RegisterServices = (req) => fetchAPI({ type : "POST", url :'/api/register', params : req })