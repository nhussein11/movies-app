import { HttpResponse } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class CacheResolverService {
  private cache: Map<string, [Date | null, HttpResponse<unknown>]> = new Map()

  constructor() {}

  set(key: string, value: any, timeToLive: number | null = null) {
    if (timeToLive) {
      const expiresIn = new Date()
      expiresIn.setSeconds(expiresIn.getSeconds() + timeToLive)
      this.cache.set(key, [expiresIn, value])
    } else {
      this.cache.set(key, [null, value])
    }
  }

  get(key: string) {
    const cached = this.cache.get(key)
    if (!cached) {
      return null
    }
    const [expiresIn, httpResponse] = cached
    if (expiresIn && expiresIn < new Date()) {
      this.cache.delete(key)
      return null
    }
    return httpResponse
  }
}
