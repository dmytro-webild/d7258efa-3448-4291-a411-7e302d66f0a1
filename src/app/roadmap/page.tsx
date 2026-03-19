"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Layers, Target, Github, Twitter, Linkedin } from "lucide-react";

export default function RoadmapPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "Systems", id: "systems" },
    { name: "Solutions", id: "solutions" },
    { name: "Proof", id: "proof" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="pill"
      contentWidth="mediumLarge"
      sizing="mediumSizeLargeTitles"
      background="floatingGradient"
      cardStyle="layered-gradient"
      primaryButtonStyle="primary-glow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Adaptive Liquidity Labs"
          navItems={navItems}
          button={{
            text: "Explore the Stack",
            href: "/systems",
          }}
        />
      </div>

      <div id="development-phases" data-section="development-phases" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <FeatureCardThree
          title="Development Roadmap"
          description="A measured path from architecture to applied deployment across three phases."
          features={[
            {
              id: "foundation",
              title: "Foundation — NOW",
              description: "Refining the core architecture, aligning system surfaces, and consolidating the research, control, and deployment layers.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-signals-1773923423763-a6abea6e.png",
              imageAlt: "Foundation phase - Core architecture",
            },
            {
              id: "operationalization",
              title: "Operationalization — NEXT",
              description: "Moving from isolated capabilities into more tightly integrated tools, environments, and repeatable workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png",
              imageAlt: "Operationalization phase - Integration",
            },
            {
              id: "scale",
              title: "Scale — LATER",
              description: "Expanding the stack into broader deployment pathways, stronger interfaces, and higher-trust environments with clearer observability.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png",
              imageAlt: "Scale phase - Broad deployment",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          tag="Development Timeline"
          tagIcon={Layers}
          tagAnimation="entrance-slide"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="key-milestones" data-section="key-milestones" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <MetricCardTwo
          title="Key Milestones"
          description="Strategic objectives and capability targets across the development roadmap."
          metrics={[
            {
              id: "control-surfaces",
              value: "Stronger Control Surfaces",
              description: "Enhanced oversight and governance capabilities for institutional deployment and high-trust environments.",
            },
            {
              id: "interoperability",
              value: "Better Interoperability",
              description: "Seamless integration pathways across diverse infrastructure, platforms, and operating ecosystems.",
            },
            {
              id: "usable-intelligence",
              value: "More Usable Intelligence",
              description: "Refined signal interpretation and decision support for operators at all levels of sophistication.",
            },
            {
              id: "adaptive-at-scale",
              value: "Adaptive Infrastructure at Scale",
              description: "Systems that maintain performance, responsiveness, and precision across large-scale deployments.",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="closing-promise" data-section="closing-promise" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <TestimonialAboutCard
          tag="Strategic Promise"
          tagIcon={Target}
          tagAnimation="blur-reveal"
          title="Build systems that hold up under use."
          description="Adaptive Liquidity Labs is not building for spectacle. We are building infrastructure that respects constraints, honors intelligence, and creates durable advantage through precision and discipline."
          subdescription="The standard is not novelty alone. The standard is durable utility. Every release, every capability, and every interface must survive contact with real operators and real markets."
          icon={Target}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/vision-future-systems-1773923425117-c5d917cd.png"
          imageAlt: "Future systems vision"
          mediaAnimation="opacity"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Adaptive Liquidity Labs"
          copyrightText="© 2025 Adaptive Liquidity Labs. Building infrastructure for the full liquidity lifecycle."
          socialLinks={[
            {
              icon: Github,
              href: "https://github.com",
              ariaLabel: "GitHub",
            },
            {
              icon: Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}