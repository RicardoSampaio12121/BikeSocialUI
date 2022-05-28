import { Injectable } from "@angular/core";
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HTTP_INTERCEPTORS
} from '@angular//common/http'
import { Observable } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        

    //const authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjE0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImV4ZW1wbG8xNEBob3RtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImNvYWNoIiwiZXhwIjoxNjUzNjc5NTUzfQ.TaurlSAbeoJtM6XDHvHBkf_BZ94yRZ-J1pxDclMb0juEQMgSxsjPXMksCvhzVQNXgc9w7xeDqgisf25aH_VYaw')});
    //const authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer eyJhbGciOiJodHRwOi8vd3d3LnczLm9yZy8yMDAxLzA0L3htbGRzaWctbW9yZSNobWFjLXNoYTUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEzIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImV4ZW1wbG8xM0Bob3RtYWlsLmNvbSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6ImNvYWNoIiwiZXhwIjoxNjUzNzMxNDUwfQ.Y5fpG4Xe-2pccBjA8kUeQBfFpY-kg39fYNWQrJMVK5dADHdexvJpI31ecIuXME2PtX-M4tr_5LmefuSesoWe_Q')});

    const token = localStorage.getItem('token')

    const authRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});

        return next.handle(authRequest)
    }

}

export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
};