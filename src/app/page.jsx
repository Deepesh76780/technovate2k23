import Navbar from "./components/nav";
import LandingPage from "./pages/landingPage";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between">
      <LandingPage />
    </main>
  );
}
