import { Observable } from 'rxjs';


export interface CrudOperations<T, ID> {
	add(t: T): Observable<T>;
	update(t: T): Observable<T>;
	getById(id: ID): Observable<T>;
	getAll(): Observable<T[]>;
	delete(id: ID): Observable<any>;
}