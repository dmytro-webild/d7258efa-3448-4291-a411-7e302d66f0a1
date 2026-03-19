"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import Link from "next/link";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroCarouselLogo from "@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import MetricCardTwo from "@/components/sections/metrics/MetricCardTwo";
import FooterCard from "@/components/sections/footer/FooterCard";

export default function SolutionsPage() {
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

      <div id="solution-categories" data-section="solution-categories" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Applied solutions for adaptive liquidity"
          description="We deploy four core solution categories designed to serve different operating environments and use cases."
          features={[
            {
              id: "liquidity-intelligence",
              title: "Liquidity Intelligence Systems",
              description: "Decision-support and signal systems for identifying movement, imbalance, opportunity, and structural friction across dynamic environments.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/liquidity-intelligence-visualization-sho-1773923424133-9076b3e3.png?_wi=3",
              imageAlt: "Liquidity intelligence visualization",
            },
            {
              id: "agentic-monetization",
              title: "Agentic Monetization Infrastructure",
              description: "Adaptive tooling that helps turn fragmented digital activity into coordinated, trackable, and scalable economic outcomes.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/autonomous-execution-system-interface-sh-1773923424581-636861ec.png?_wi=3",
              imageAlt: "Agentic automation infrastructure",
            },
            {
              id: "trust-infrastructure",
              title: "Trust & Identity Infrastructure",
              description: "Systems that improve discoverability, verification, coordination, and confidence across machine and human participants.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/coordination-infrastructure-showing-rese-1773923424320-2c3515a2.png?_wi=3",
              imageAlt: "Trust and coordination infrastructure",
            },
            {
              id: "platform-automation",
              title: "Platform & Workflow Automation",
              description: "Operational systems that reduce manual bottlenecks, improve response speed, and create repeatable economic workflows.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/capability-automation-1773923424581-636861ec.png",
              imageAlt: "Platform automation systems",
            },
          ]}
          gridVariant="four-items-2x2-equal-grid"
          animationType="scale-rotate"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="operator-segments" data-section="operator-segments" className="mx-auto px-4 md:px-6">
        <FeatureCardThree
          title="Tailored for distinct operating environments"
          description="Our infrastructure scales from individual operators to institutional teams without collapsing into one-size-fits-all software."
          features={[
            {
              id: "independent-operators",
              title: "Independent Operators",
              description: "Cleaner signal, faster tooling, better automation, and stronger operating leverage for individual traders and builders.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-civilian-operators-ind-1773923424598-87f036a2.png?_wi=3",
              imageAlt: "Independent operator workspace",
            },
            {
              id: "platforms-builders",
              title: "Builders and Platforms",
              description: "Composable systems, modular architecture, and infrastructure that can support new products and emerging ecosystems.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/infrastructure-blueprint-showin-1773923423946-f4265e1f.png",
              imageAlt: "Builder infrastructure blueprint",
            },
            {
              id: "institutional-teams",
              title: "Institutional Teams",
              description: "High-trust surfaces, clearer control layers, and infrastructure that supports structured deployment pathways.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/representation-of-institutional-environm-1773923425945-0b591984.png?_wi=3",
              imageAlt: "Institutional operations center",
            },
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="engagement-models" data-section="engagement-models" className="mx-auto px-4 md:px-6">
        <MetricCardTwo
          title="Deployment and engagement pathways"
          description="We work through three primary engagement models tailored to different partnership and deployment scenarios."
          metrics={[
            {
              id: "internal-products",
              value: "Products",
              description: "Direct-to-operator tooling and platforms that serve specific market functions or specialized use cases",
            },
            {
              id: "strategic-deployments",
              value: "Strategy",
              description: "Bespoke infrastructure integration and systems implementation for institutional and platform partners",
            },
            {
              id: "infrastructure-partnerships",
              value: "Infrastructure",
              description: "Foundational systems and API-based services that power other platforms and emerging ecosystems",
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