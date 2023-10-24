"use client"
import LandingPage from "./pages/landingPage";

export default function Event() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between overflow-x-hidden p-16"
    style={{
      backgroundImage: `url(/background_images/events.jpg)`,
      backgroundPosition: 'center',
      backgroundRepeat:'no-repeat',
      backgroundSize: 'cover',
    }}
    > 
        <div className="h-full w-full my-auto">
          <LandingPage/>
        </div>
    </main>
  );
}
