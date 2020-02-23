import axiso, { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export class Sync<T extends HasId> {
  fetch(id: number): AxiosPromise<T> {
    return axiso.get(`http://localhost:3000/users/${id}`);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;
    return id ? axiso.put(`http://localhost:3000/users/${id}`, data) : axiso.post(`http://localhost:3000/users`, data);
  }
}
