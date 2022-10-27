import { Injectable } from '@angular/core'
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http'
import { Observable, of, tap } from 'rxjs'
import { CacheResolverService } from '@shared/services/cache-resolver.service'

const HALF_HOUR = 1800
const TIME_TO_LIVE = HALF_HOUR

@Injectable()
export class CachingInterceptor implements HttpInterceptor {
  constructor(private cacheResolver: CacheResolverService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request)
    }
    console.log(request.url)
    const cachedResponse = this.cacheResolver.get(request.url)
    return cachedResponse ? of(cachedResponse) : this.sendRequest(request, next)
  }

  sendRequest(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cacheResolver.set(request.url, event, TIME_TO_LIVE)
        }
      })
    )
  }
}
