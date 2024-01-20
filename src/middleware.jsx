import { NextResponse } from "next/server";

export async function generateMetadata({ params }) {
  return {
    title: "Technovate 2024",
    description: `Technovate at IIIT-NR is an annual convergence of technology and culture,
       encompassing coding competitions, hacking contests, battle of bands, 
       and keynote sessions by innovation experts. Spanning three dynamic days, 
       it provides a platform for inventive thinking, spotlighting ingenious ideas 
       and cultural talents. Attendees can engage in collaborative learning, network 
       with like-minded individuals, and explore cutting-edge technologies.The event
        includes stand-up performances, soul-stirring melodies, and EDM beats, creating 
        a vibrant oasis where students can celebrate their skills and passions. Following 
        the success of the previous edition with 5000 participants, this year anticipates 
        an even larger turnout of over 7000, solidifying Technovate as a thriving celebration 
        of creativity and expertise. With its dynamic mix of events and a growing community, 
        Technovate continues to evolve as a significant platform where technology and culture converge harmoniously.`,
    openGraph: {
      image: [
        {
          url: "/logo/logo.png",
        },
      ],
    },
  };
}

export function middleware(request) {
const url = request.nextUrl.clone()
url.pathname = '/'
  if (request.nextUrl.pathname==='/events') {
    return NextResponse.redirect(url)
  }
  return NextResponse.next();
}
