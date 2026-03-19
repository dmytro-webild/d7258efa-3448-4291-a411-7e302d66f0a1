"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Zap, Layers } from "lucide-react";

export default function SystemsPage() {
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

      <div id="aeon-overview" data-section="aeon-overview" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="AEON Protocol — core architecture"
          description="AEON is the adaptive architecture layer that organizes inputs, reasoning, orchestration, execution, and feedback into a continuous system loop. It is designed to support intelligent liquidity operations without reducing everything to a single tool or static dashboard."
          features={[
            {
              id: "detects-change",
              title: "Detects change early",
              description: "Continuous monitoring and signal analysis identify market shifts and emerging inefficiencies before they compound.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-signal-layer-visualization-incoming-1773923423763-a6abea6e.png",
              imageAlt: "Early change detection system",
            },
            {
              id: "routes-intelligently",
              title: "Routes action intelligently",
              description: "Decisions and execution flow through optimal pathways based on current conditions and historical context.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png",
              imageAlt: "Intelligent routing system",
            },
            {
              id: "preserves-observability",
              title: "Preserves observability",
              description: "Every decision, action, and outcome remains visible, reviewable, and subject to human oversight.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png",
              imageAlt: "Observability and verification",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="aeon-layers" data-section="aeon-layers" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          tag="Architecture Foundation"
          tagIcon={Layers}
          tagAnimation="entrance-slide"
          title="The seven-layer AEON stack"
          description="At the center of the lab is AEON: a systems architecture for adaptive economic optimization. It is designed to turn fragmented inputs into coordinated outputs through research, orchestration, bounded execution, and continuous feedback."
          features={[
            {
              id: "signals",
              title: "Signals Layer",
              description: "Market, behavioral, operational, and environmental inputs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-signal-layer-visualization-incoming-1773923423763-a6abea6e.png",
              imageAlt: "Signal input layer",
            },
            {
              id: "research",
              title: "Research Layer",
              description: "Structures discovery, analysis, and context generation for decision support.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-research-layer-analysis-and-discove-1773923424650-7f61ccc9.png",
              imageAlt: "Research and analysis layer",
            },
            {
              id: "inference",
              title: "Intelligence & Inference",
              description: "Transforms raw inputs into weighted interpretations and opportunity structures.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-intelligence-inference-layer-transf-1773923424806-5f4b5d31.png",
              imageAlt: "Intelligence inference layer",
            },
            {
              id: "orchestration",
              title: "Orchestration Layer",
              description: "Routes tasks, priorities, agents, and logic across the broader stack.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png",
              imageAlt: "Orchestration layer",
            },
            {
              id: "execution",
              title: "Execution Layer",
              description: "Handles action pathways, deployments, system responses, and repeatable workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-execution-layer-action-pathways-dep-1773923425012-4cfff386.png",
              imageAlt: "Execution layer",
            },
            {
              id: "treasury",
              title: "Treasury & Liquidity Logic",
              description: "Manages capital dynamics, liquidity states, retention pathways, and recycling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-treasury-liquidity-logic-layer-capi-1773923425746-e023f147.png",
              imageAlt: "Treasury layer",
            },
            {
              id: "feedback",
              title: "Feedback & Verification",
              description: "Measures outcomes, detects drift, and closes the loop for continuous adaptation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png",
              imageAlt: "Feedback layer",
            },
          ]}
          gridVariant="one-large-right-three-stacked-left"
          animationType="blur-reveal"
          buttons={[
            {
              text: "Explore Solutions",
              href: "/solutions",
            },
          ]}
          textboxLayout="split-actions"
          useInvertedBackground={false}
        />
      </div>

      <div id="system-lifecycle" data-section="system-lifecycle" className="mx-auto px-4 md:px-6">
        <MetricCardTwo
          title="System behavior and lifecycle"
          description="The AEON protocol operates through a continuous cycle of detection, routing, execution, and learning. Each phase builds intelligence for the next cycle."
          metrics={[
            {
              id: "detect",
              value: "01",
              description: "Detect market shifts and inefficiencies through continuous signal analysis",
            },
            {
              id: "route",
              value: "02",
              description: "Route decisions and execution through optimal pathways",
            },
            {
              id: "execute",
              value: "03",
              description: "Execute coordinated actions with precision and measurable constraints",
            },
            {
              id: "learn",
              value: "04",
              description: "Learn from outcomes and feed intelligence back into the system",
            },
            {
              id: "optimize",
              value: "05",
              description: "Optimize for next cycle with improved understanding and adaptation",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Adaptive Liquidity Labs"
          copyrightText="© 2025 Adaptive Liquidity Labs. Building infrastructure for the full liquidity lifecycle."
          socialLinks={[
            {
              icon: require("lucide-react").Github,
              href: "https://github.com",
              ariaLabel: "GitHub",
            },
            {
              icon: require("lucide-react").Twitter,
              href: "https://twitter.com",
              ariaLabel: "Twitter",
            },
            {
              icon: require("lucide-react").Linkedin,
              href: "https://linkedin.com",
              ariaLabel: "LinkedIn",
            },
          ]}
        />
      </div>
    </ThemeProvider>
  );
}