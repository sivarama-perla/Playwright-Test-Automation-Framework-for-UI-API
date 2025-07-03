import apiClient from '../utilities/apiClient';

export class PetApi {
  async getPetById(petId: number | string) {
    try {
      const res = await apiClient.get(`/pet/${petId}`);
      return res;
    } catch (err: any) {
      return err.response;
    }
  }

  async createPet(pet: any) {
    const res = await apiClient.post(`/pet`, pet);
    return res;
  }

  async deletePet(petId: number) {
    const res = await apiClient.delete(`/pet/${petId}`);
    return res;
  }
}