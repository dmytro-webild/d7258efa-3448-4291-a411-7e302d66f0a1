"use client";

import Link from "next/link";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import TestimonialAboutCard from "@/components/sections/about/TestimonialAboutCard";
import FeatureCardThree from "@/components/sections/feature/featureCardThree/FeatureCardThree";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "Mission", id: "mission" },
    { name: "Systems", id: "systems" },
    { name: "Solutions", id: "solutions" },
    { name: "Proof", id: "proof" },
    { name: "Roadmap", id: "roadmap" },
    { name: "Contact", id: "contact" },
  ];

  const contactMethods = [
    {
      id: "email",
      title: "Email",
      description: "For general inquiries and partnership discussions.",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-research--1773923423912-9a3f1833.png?_wi=2",
    },
    {
      id: "business",
      title: "Business Development",
      description: "Strategic partnerships, institutional deployments, and integration opportunities.",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-deploymen-1773923422540-e627e69c.png?_wi=2",
    },
    {
      id: "technical",
      title: "Technical Support",
      description: "Infrastructure questions, system integration, and deployment pathways.",
      imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-minimalist-icon-representing-control-a-1773923424476-022dac91.png?_wi=2",
    },
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

      <div id="contact-hero" data-section="contact-hero">
        <TestimonialAboutCard
          tag="Conversation"
          tagIcon={Mail}
          tagAnimation="entrance-slide"
          title="Start a serious conversation."
          description="Adaptive Liquidity Labs is interested in conversations around infrastructure, strategic deployment, research alignment, and systems-level collaboration."
          subdescription="If you are building in markets, AI systems, agent infrastructure, or liquidity-sensitive environments, this is the right place to start a higher-level conversation."
          icon={Mail}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3BAD2d6kqNIKhzyVPnRs3VDF6rA/a-sophisticated-liquidity-intelligence-m-1773923424923-83e65bbb.png?_wi=3"
          imageAlt="Contact interface visualization"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-methods" data-section="contact-methods">
        <FeatureCardThree
          title="How to reach us"
          description="Multiple pathways to connect based on your specific needs and inquiry type."
          features={contactMethods}
          gridVariant="three-columns-all-equal-width"
          animationType="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-form-section" data-section="contact-form-section">
        <div className="mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-medium mb-4 text-white">
                Get in touch
              </h2>
              <p className="text-lg text-gray-300 mb-2">
                Send us a message with details about your project or inquiry.
              </p>
              <p className="text-sm text-gray-400">
                We typically respond within 24-48 hours.
              </p>
            </div>

            <form className="space-y-6 bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 border border-gray-800">
              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-full transition-colors"
                >
                  Send Message
                </button>
                <button
                  type="reset"
                  className="flex-1 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-full transition-colors border border-gray-700"
                >
                  Clear
                </button>
              </div>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Mail className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Email</p>
                <p className="text-xs text-gray-500 mt-1">contact@adaptivelabs.com</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Phone</p>
                <p className="text-xs text-gray-500 mt-1">Schedule a call</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Remote</p>
                <p className="text-xs text-gray-500 mt-1">Global operations</p>
              </div>
            </div>
          </div>
        </div>
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