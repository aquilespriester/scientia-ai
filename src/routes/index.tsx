import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Positioning } from "@/components/site/positioning";
import { Audiences } from "@/components/site/audiences";
import { Method } from "@/components/site/method";
import { Services } from "@/components/site/services";
import { Plans } from "@/components/site/plans";
import { Diagnosis } from "@/components/site/diagnosis";
import { EthicsPreview } from "@/components/site/ethics";
import { Location } from "@/components/site/location";
import { Footer } from "@/components/site/footer";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Positioning />
      <Audiences />
      <Method />
      <Services />
      <Plans />
      <Diagnosis />
      <EthicsPreview />
      <Location />
      <Footer />
    </main>
  );
}
