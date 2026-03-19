"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Layers, Target, Github, Twitter, Linkedin } from "lucide-react";

export default function ProofPage() {
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

      <div id="proof-framework" data-section="proof-framework" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <FeatureCardThree
          title="Research & Proof"
          description="Papers, architecture, prototypes, and operating logic behind Adaptive Liquidity Labs."
          features={[
            {
              id: "papers",
              title: "Papers",
              description: "Technical papers, system writeups, and formal architecture documents.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-research-layer-analysis-and-discove-1773923424650-7f61ccc9.png?_wi=3",
              imageAlt: "Research and analysis documentation",
            },
            {
              id: "blueprints",
              title: "System Blueprints",
              description: "Visual and written breakdowns of how the stack is designed to function.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/advanced-infrastructure-blueprint-showin-1773923423946-f4265e1f.png?_wi=3",
              imageAlt: "System architecture blueprints",
            },
            {
              id: "prototypes",
              title: "Prototypes",
              description: "Working product surfaces, interaction models, and deployment pathways.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png?_wi=5",
              imageAlt: "Prototype interface demonstrations",
            },
            {
              id: "operating-logic",
              title: "Operating Logic",
              description: "The principles, constraints, and mechanisms that govern how systems are built and used.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png?_wi=5",
              imageAlt: "Operating principles and mechanisms",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="blur-reveal"
          tag="Evidence Framework"
          tagIcon={Layers}
          tagAnimation="entrance-slide"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="featured-research" data-section="featured-research" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <TestimonialAboutCard
          tag="Featured Publication"
          tagIcon={Zap}
          tagAnimation="entrance-slide"
          title="AEON Protocol — Core Architecture"
          description="A research-led architectural overview of the system logic, layers, and design stance behind Adaptive Liquidity Labs."
          subdescription="This comprehensive guide explains how AEON transforms inputs into coordinated outputs through research, orchestration, bounded execution, and continuous feedback. It serves as the foundation for understanding how all other systems integrate and operate within the broader infrastructure."
          icon={Layers}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-signals-1773923423763-a6abea6e.png?_wi=1"
          imageAlt="AEON Protocol architecture visualization"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="research-items" data-section="research-items" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <MetricCardTwo
          title="Additional Research Publications"
          description="A growing collection of technical documentation, frameworks, and architectural guides."
          metrics={[
            {
              id: "agentic-monetization",
              value: "Agentic Monetization Framework",
              description: "Adaptive tooling that helps turn fragmented digital activity into coordinated, trackable, and scalable economic outcomes.",
            },
            {
              id: "liquidity-systems",
              value: "Liquidity Systems Overview",
              description: "Core principles and operating models for how liquidity flows, compounds, and optimizes across the full lifecycle.",
            },
            {
              id: "registry-trust",
              value: "Registry and Trust Infrastructure",
              description: "Mechanisms for improving discoverability, verification, coordination, and confidence across participants.",
            },
            {
              id: "deployment-architecture",
              value: "Deployment Architecture Notes",
              description: "Practical guidance on how to integrate AEON and related systems into existing infrastructure and workflows.",
            },
            {
              id: "interface-control",
              value: "Interface and Control Surfaces",
              description: "Design patterns and principles for building robust, observable, and intuitive control surfaces for complex systems.",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="proof-statement" data-section="proof-statement" className="mx-auto px-4 md:px-6 py-16 md:py-24">
        <TestimonialAboutCard
          tag="Core Principle"
          tagIcon={Target}
          tagAnimation="blur-reveal"
          title="Evidence over theater."
          description="The proof page communicates that this company prefers architecture, clarity, and working systems over empty claims."
          subdescription="Every system, framework, and capability described in our research exists not as marketing narrative, but as documented architecture, working prototypes, and deployed infrastructure. We measure ourselves by evidence, not hype."
          icon={Target}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/future-oriented-visualization-of-adaptiv-1773923425117-c5d917cd.png?_wi=3"
          imageAlt="Evidence-based systems visualization"
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