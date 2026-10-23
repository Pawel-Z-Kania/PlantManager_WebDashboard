import { Injectable, inject } from '@angular/core'
import { Observable } from "rxjs"
import { environment } from "../env/environment.prod"
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})

export class PotsService {
    private http = inject(HttpClient);
    private apiUrl = `${environment.apiUrl}/pots`

    getPots(): Observable<any> {
        return this.http.get(this.apiUrl);
    }
}

