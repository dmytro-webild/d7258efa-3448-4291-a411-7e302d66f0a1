"use client";

import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterCard from "@/components/sections/footer/FooterCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function MissionPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "Systems", id: "systems" },
    { name: "Solutions", id: "solutions" },
    { name: "Proof", id: "proof" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    // Navigation handled by Next.js Link components
  };

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
      <div id="nav" data-section="nav" className="mx-auto px-4 md:px-6">
        <NavbarStyleCentered
          brandName="Adaptive Liquidity Labs"
          navItems={navItems}
          button={{
            text: "Explore the Stack",
            href: "/",
          }}
        />
      </div>

      <div id="mission-hero" data-section="mission-hero" className="mx-auto px-4 md:px-6">
        <HeroCarouselLogo
          logoText="Mission"
          description="Build infrastructure that makes liquidity more intelligent, more adaptive, and more usable. Adaptive Liquidity Labs is building systems that bring research, orchestration, execution, and feedback into a single adaptive framework."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-sophisticated-liquidity-intelligence-m-1773923424923-83e65bbb.png",
              imageAlt: "Liquidity intelligence systems",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/an-economic-orchestration-engine-interfa-1773923428465-c437bc7e.png",
              imageAlt: "Adaptive coordination systems",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/interconnected-system-nodes-floating-in--1773923423285-08810acd.png",
              imageAlt: "Integrated feedback systems",
            },
          ]}
          buttons={[
            {
              text: "Explore the Stack",
              href: "/",
            },
            {
              text: "Read the Proof",
              href: "/",
            },
          ]}
          autoplayDelay={5000}
          showDimOverlay={false}
        />
      </div>

      <div id="mission-problem" data-section="mission-problem" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Most economic systems are still fragmented by default."
          description="Capital is often trapped in disconnected tools, delayed decisions, shallow analytics, or manual workflows that degrade performance over time. Users are forced to bridge research, execution, treasury logic, and monitoring across scattered systems that were never designed to operate as one unified framework."
          features={[
            {
              id: "fragmentation",
              title: "Systems are disconnected",
              description: "Existing infrastructure forces operators to manage multiple tools, lose signal continuity, and manually coordinate between research and execution.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/advanced-infrastructure-blueprint-showin-1773923423946-f4265e1f.png",
              imageAlt: "Fragmentation challenge",
            },
            {
              id: "delayed-intelligence",
              title: "Intelligence becomes stale",
              description: "Delays between data collection, analysis, and action execution mean opportunities are missed and risk accumulates.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/liquidity-intelligence-visualization-sho-1773923424133-9076b3e3.png",
              imageAlt: "Intelligence latency challenge",
            },
            {
              id: "manual-overhead",
              title: "Manual overhead dominates",
              description: "Repeatable economic tasks remain manual, consuming operator time and introducing systematic errors.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/autonomous-execution-system-interface-sh-1773923424581-636861ec.png",
              imageAlt: "Manual overhead challenge",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="mission-principles" data-section="mission-principles" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Five Core Principles"
          description="Our approach is grounded in a commitment to building systems that work for serious operators. These principles guide everything we build."
          features={[
            {
              id: "people-first",
              title: "People before abstraction",
              description: "Systems should serve real users and real operators before they serve narratives or technical sophistication.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-civilian-operators-ind-1773923424598-87f036a2.png",
              imageAlt: "People-first principle",
            },
            {
              id: "intelligence-to-action",
              title: "Intelligence must become action",
              description: "Research without execution is static analysis. Execution without intelligence is reckless automation. Intelligence only matters when it drives measurable outcomes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png",
              imageAlt: "Intelligence-to-action principle",
            },
            {
              id: "adaptivity-wins",
              title: "Adaptivity beats rigidity",
              description: "The strongest systems do not merely automate fixed workflows. They respond to change, re-balance under new conditions, and learn from outcomes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png",
              imageAlt: "Adaptivity principle",
            },
            {
              id: "control-matters",
              title: "Control matters",
              description: "Autonomy must be bounded, observable, and reviewable. Systems that operate without clear control surfaces breed distrust and risk.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-institutional-environm-1773923425945-0b591984.png",
              imageAlt: "Control principle",
            },
            {
              id: "trust-wins",
              title: "Long-term trust wins",
              description: "High-trust infrastructure is built through clarity, evidence, and disciplined system design. Not through claims.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/future-oriented-visualization-of-adaptiv-1773923425117-c5d917cd.png",
              imageAlt: "Trust principle",
            },
            {
              id: "compound-utility",
              title: "Compound utility over time",
              description: "Strong systems improve performance across multiple dimensions: signal quality, decision speed, execution precision, and capital preservation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/coordination-infrastructure-showing-rese-1773923424320-2c3515a2.png",
              imageAlt: "Compound utility principle",
            },
          ]}
          gridVariant="bento-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer" className="mx-auto px-4 md:px-6">
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