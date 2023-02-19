import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CrudOperations } from 'src/app/interfaces/crud-operation.interface';

export abstract class CrudService<T,ID> implements CrudOperations<T,ID>{
    constructor(
        protected _http: HttpClient,
        protected _base: string
      ) {}
    
   public add(t: T): Observable<T> {
        return this._http.post<T>(this._base + "/add",t);
    }
   public update(t: T): Observable<T> {
        return this._http.put<T>(this._base + "/update",t,{});
    }
   public getById(id: ID): Observable<T> {
        return this._http.get<T>(this._base  + "/getbyid/?id=" + id);
    }
   public getAll(): Observable<T[]> {
        return this._http.get<T[]>(this._base + "/getall");
    }
   public delete(id: ID): Observable<any> {
        return this._http.delete<T>(this._base + "/delete?id=" + id);
    }

}