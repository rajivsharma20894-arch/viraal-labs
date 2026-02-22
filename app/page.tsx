"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Differentiation from "@/components/Differentiation";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AuditModal from "@/components/ui/AuditModal";
import { useState } from "react";

export default function Home() {
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <main className="relative">
      <Navbar onAuditClick={() => setAuditOpen(true)} />
      <Hero onAuditClick={() => setAuditOpen(true)} />
      <Services />
      <Differentiation />
      <Portfolio />
      <Contact />
      <Footer />
      <AuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />
    </main>
  );
}
