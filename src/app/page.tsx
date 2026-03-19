"use client";

import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import FooterCard from "@/components/sections/footer/FooterCard";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Zap, Cpu, Layers, Target, Github, Twitter, Linkedin } from "lucide-react";

export default function HomePage() {
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

      <div id="hero" data-section="hero" className="mx-auto px-4 md:px-6">
        <HeroCarouselLogo
          logoText="Adaptive Liquidity Labs"
          description="Adaptive, autonomous systems for the full liquidity lifecycle. We build tools, agents, and infrastructure that detect inefficiency, coordinate action, and optimize how liquidity is routed, retained, recycled, and scaled across civilian and institutional environments."
          slides={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-sophisticated-liquidity-intelligence-m-1773923424923-83e65bbb.png",
              imageAlt: "Active liquidity intelligence map visualization",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/an-economic-orchestration-engine-interfa-1773923428465-c437bc7e.png",
              imageAlt: "Economic orchestration engine interface",
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/interconnected-system-nodes-floating-in--1773923423285-08810acd.png",
              imageAlt: "Interconnected system nodes and signal pathways",
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

      <div id="trust-statements" data-section="trust-statements" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Built on fundamental principles"
          description="The foundation of our infrastructure rests on three core commitments to serious systems engineering."
          features={[
            {
              id: "research-led",
              title: "Research-led architecture",
              description: "Every system component flows from rigorous analysis, not marketing narrative.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-research--1773923423912-9a3f1833.png",
              imageAlt: "Research-led architecture icon",
            },
            {
              id: "modular-deployment",
              title: "Modular deployment pathways",
              description: "Infrastructure designed for flexible, staged integration across diverse environments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-deploymen-1773923422540-e627e69c.png",
              imageAlt: "Modular deployment pathways icon",
            },
            {
              id: "high-trust",
              title: "Built for high-trust environments",
              description: "Systems engineered for institutional rigor, observability, and controlled autonomy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-control-a-1773923424476-022dac91.png",
              imageAlt: "High-trust environments icon",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="infrastructure-overview" data-section="infrastructure-overview" className="mx-auto px-4 md:px-6">
        <TestimonialAboutCard
          tag="Core Positioning"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Infrastructure, not abstractions."
          description="Adaptive Liquidity Labs develops systems that transform fragmented markets, idle capital, and disconnected workflows into coordinated, machine-assisted liquidity operations."
          subdescription="The focus is not noise. The focus is usable intelligence, controlled automation, and infrastructure that can operate under real constraints. Every tool serves precision, every agent respects bounds, every feedback loop closes toward measurable improvement."
          icon={Cpu}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/advanced-infrastructure-blueprint-showin-1773923423946-f4265e1f.png"
          imageAlt="Advanced infrastructure systems blueprint"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="capabilities" data-section="capabilities" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Four core capabilities"
          description="The systems we build address four essential dimensions of modern liquidity infrastructure."
          features={[
            {
              id: "liquidity-intelligence",
              title: "Liquidity Intelligence",
              description: "Signal detection, market interpretation, and structured decision support for dynamic liquidity environments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/liquidity-intelligence-visualization-sho-1773923424133-9076b3e3.png",
              imageAlt: "Liquidity Intelligence capability",
            },
            {
              id: "agentic-automation",
              title: "Agentic Automation",
              description: "Autonomous and semi-autonomous systems that execute repeatable economic tasks with bounded logic and measurable outputs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/autonomous-execution-system-interface-sh-1773923424581-636861ec.png",
              imageAlt: "Agentic Automation capability",
            },
            {
              id: "coordination",
              title: "Coordination Infrastructure",
              description: "Frameworks that connect research, routing, execution, and feedback into a single adaptive operating loop.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/coordination-infrastructure-showing-rese-1773923424320-2c3515a2.png",
              imageAlt: "Coordination Infrastructure capability",
            },
            {
              id: "dual-utility",
              title: "Civilian + Institutional Utility",
              description: "Tools designed to serve both independent operators and more formal operating environments without collapsing into one-size-fits-all software.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/dual-utility-infrastructure-serving-both-1773923426558-cecabfa5.png",
              imageAlt: "Civilian and Institutional Utility capability",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="liquidity-lifecycle" data-section="liquidity-lifecycle" className="mx-auto px-4 md:px-6">
        <MetricCardTwo
          title="The Liquidity Lifecycle"
          description="Liquidity is not a single event. It is a lifecycle. Strong systems do more than create access to capital. They improve how capital moves, how it is preserved, how it compounds, and how it feeds the next cycle."
          metrics={[
            {
              id: "detect",
              value: "Detect",
              description: "Identify market inefficiencies, opportunity structures, and systemic imbalances.",
            },
            {
              id: "route",
              value: "Route",
              description: "Direct capital and execution through optimal pathways with intelligent prioritization.",
            },
            {
              id: "deploy",
              value: "Deploy",
              description: "Execute coordinated actions with precision, control, and measurable constraints.",
            },
            {
              id: "retain",
              value: "Retain",
              description: "Preserve capital quality, manage exposure, and protect operational continuity.",
            },
            {
              id: "recycle",
              value: "Recycle",
              description: "Feed outcomes back into the system to compound utility and improve future cycles.",
            },
          ]}
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="aeon-preview" data-section="aeon-preview" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          tag="Architecture Foundation"
          tagIcon={Layers}
          tagAnimation="slide-up"
          title="The AEON Architecture Layer"
          description="At the center of the lab is AEON: a systems architecture for adaptive economic optimization. It is designed to turn fragmented inputs into coordinated outputs through research, orchestration, bounded execution, and continuous feedback."
          features={[
            {
              id: "signals",
              title: "Signals",
              description: "Market, behavioral, operational, and environmental inputs.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-signal-layer-visualization-incoming-1773923423763-a6abea6e.png",
              imageAlt: "AEON Signals layer",
            },
            {
              id: "research",
              title: "Research",
              description: "Structures discovery, analysis, and context generation for decision support.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-research-layer-analysis-and-discove-1773923424650-7f61ccc9.png",
              imageAlt: "AEON Research layer",
            },
            {
              id: "inference",
              title: "Intelligence & Inference",
              description: "Transforms raw inputs into weighted interpretations and opportunity structures.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-intelligence-inference-layer-transf-1773923424806-5f4b5d31.png",
              imageAlt: "AEON Intelligence & Inference layer",
            },
            {
              id: "orchestration",
              title: "Orchestration",
              description: "Routes tasks, priorities, agents, and logic across the broader stack.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-orchestration-layer-task-routing-pr-1773923424981-2cd12223.png",
              imageAlt: "AEON Orchestration layer",
            },
            {
              id: "execution",
              title: "Execution",
              description: "Handles action pathways, deployments, system responses, and repeatable workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-execution-layer-action-pathways-dep-1773923425012-4cfff386.png",
              imageAlt: "AEON Execution layer",
            },
            {
              id: "treasury",
              title: "Treasury & Liquidity Logic",
              description: "Manages capital dynamics, liquidity states, retention pathways, and recycling.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-treasury-liquidity-logic-layer-capi-1773923425746-e023f147.png",
              imageAlt: "AEON Treasury & Liquidity Logic layer",
            },
            {
              id: "feedback",
              title: "Feedback & Verification",
              description: "Measures outcomes, detects drift, and closes the loop for continuous adaptation.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/aeon-feedback-verification-layer-outcome-1773923425038-22cc9c9f.png",
              imageAlt: "AEON Feedback & Verification layer",
            },
          ]}
          gridVariant="one-large-right-three-stacked-left"
          animationType="blur-reveal"
          buttons={[
            {
              text: "View Systems",
              href: "/",
            },
          ]}
          textboxLayout="split-actions"
          useInvertedBackground={false}
        />
      </div>

      <div id="operator-segments" data-section="operator-segments" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Who this is for"
          description="Our infrastructure serves two distinct operating environments, each with unique requirements and constraints."
          features={[
            {
              id: "civilian-operators",
              title: "For Civilian Operators",
              description: "Individuals, builders, traders, and digital operators who need better tooling, cleaner signal flow, and more intelligent ways to manage economic activity.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-civilian-operators-ind-1773923424598-87f036a2.png",
              imageAlt: "Civilian Operators segment",
            },
            {
              id: "institutional-environments",
              title: "For Institutional Environments",
              description: "Teams, platforms, and structured operators who need modular infrastructure, stronger control surfaces, clearer observability, and adaptive systems that can scale responsibly.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-institutional-environm-1773923425945-0b591984.png",
              imageAlt: "Institutional Environments segment",
            },
          ]}
          gridVariant="two-columns-alternating-heights"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="closing-band" data-section="closing-band" className="mx-auto px-4 md:px-6">
        <TestimonialAboutCard
          tag="Vision"
          tagIcon={Target}
          tagAnimation="blur-reveal"
          title="Build systems that improve the movement of value."
          description="Adaptive Liquidity Labs exists to replace fragmented workflows and brittle market participation with systems that learn, adapt, and compound utility over time."
          subdescription="We are not building automation theater. We are building infrastructure that respects constraints, honors intelligence, and creates durable advantage through precision and discipline."
          icon={Target}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/future-oriented-visualization-of-adaptiv-1773923425117-c5d917cd.png"
          imageAlt="Future-oriented adaptive systems visualization"
          mediaAnimation="opacity"
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