import axios from 'axios';
import { BASE_URL } from '../utils';

export const editTraveller = (id, form) => {
    return axios.put(`${BASE_URL}/travellers/${id}`, form);
}

export const getTravellerById = (id) => {
    return axios.get(`${BASE_URL}/travellers/${id}`);
}

export const getAllTravellers = () => {
    return axios.get(`${BASE_URL}/travellers`);
}

export const deleteTravellerById = (id) => {
    return axios.delete(`${BASE_URL}/travellers/${id}`);
}

export const createTraveller = (form) => {
    return axios.post(`${BASE_URL}/travellers`, form);
}