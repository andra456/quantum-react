import { fetchAPI } from '../../helper/fetcher';

export const userServices = (req) => fetchAPI({ type : "GET", url :'/api/users', params : req })
export const userEdit = (req) => fetchAPI({ type : "PUT", url :'/api/users', params : req })
export const userCreate = (req) => fetchAPI({ type : "POST", url :'/api/users', params : req })
export const userDelete = (req) => fetchAPI({ type : "DELETE", url :'/api/users', params : req })