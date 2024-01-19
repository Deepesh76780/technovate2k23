import { NextResponse } from 'next/server'

 
export function middleware(request) {
const url = request.nextUrl.clone()
url.pathname = '/'
  if (request.nextUrl.pathname==='/events') {
    return NextResponse.redirect(url)
  }
    return NextResponse.next()
}