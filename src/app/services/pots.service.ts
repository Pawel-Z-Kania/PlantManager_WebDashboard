import { Injectable, inject } from '@angular/core'
import { Observable } from "rxjs"
import { environment } from "../env/environment.prod"
import { HttpClient } from '@angular/common/http'
import { Pot } from '../models/pot.model'

@Injectable({
    providedIn: 'root'
})

export class PotsService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/pots`

    getPots(): Observable<Pot[]> {
        return this.http.get<Pot[]>(this.apiUrl);
    }
}

