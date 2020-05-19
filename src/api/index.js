import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const insertPlant = payload => api.post(`/plants`, payload);
export const getAllPlants = () => api.get(`/plants`);
export const updatePlantById = (id, payload) => api.put(`/plant/${id}`, payload);
export const deletePlantById = id => api.delete(`/plant/${id}`);
export const getPlantById = id => api.get(`/plant/${id}`);

const apis = {
  insertPlant,
  getAllPlants,
  updatePlantById,
  deletePlantById,
  getPlantById,
}

export default apis;