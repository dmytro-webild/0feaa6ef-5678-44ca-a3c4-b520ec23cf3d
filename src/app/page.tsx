"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="medium"
        sizing="mediumLarge"
        background="noise"
        cardStyle="glass-depth"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Our Story",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Gallery",          id: "gallery"},
        {
          name: "Bookings",          id: "reservation"},
      ]}
      brandName="Syrisches Haus"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient"}}
      title="A Symphony of Culinary Art"
      description="Experience a journey of taste where tradition meets modern sophistication in every meticulously plated dish."
      tag="Syrisches Haus - Fine Dining"
      buttons={[
        {
          text: "Reserve a Table",          href: "#reservation"},
        {
          text: "View Menu",          href: "#menu"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-black-pasta-fork_23-2148469861.jpg",          imageAlt: "Culinary excellence"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/dining-table-with-chairs-tableware_140725-7823.jpg",          imageAlt: "Fine dining ambiance"}
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Exceptional dining experiences"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Our Philosophy"
      description="At Syrisches Haus, we believe that fine dining is more than just a meal—it is a narrative of culture, passion, and culinary precision. Our chefs craft every plate with a dedication to quality and an eye for the exquisite."
      imageSrc="http://img.b2bpic.net/free-photo/female-chef-adding-sauce-dish_23-2148763222.jpg"
      imageAlt="Culinary craftsmanship"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwelve
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",          label: "Selection",          title: "Artisan Ingredients",          items: [
            "Locally sourced organic produce",            "Rare imported culinary herbs",            "Sustainable farm-to-table supply"],
        },
        {
          id: "f2",          label: "Craft",          title: "Precision Plating",          items: [
            "Master chef culinary expertise",            "Elegant visual composition",            "Modern fine dining aesthetics"],
        },
        {
          id: "f3",          label: "Ambiance",          title: "Sophisticated Atmosphere",          items: [
            "Minimalist luxury interior design",            "Warm ambient lighting",            "Private booth availability"],
        },
      ]}
      title="Signature Experiences"
      description="Indulge in our carefully curated selection of premium dishes crafted with rare ingredients."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Starter",          name: "Velouté of Forest Mushrooms",          price: "€18",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/tuna-sushi_1203-8900.jpg"},
        {
          id: "p2",          brand: "Main Course",          name: "Pan-Seared Atlantic Scallops",          price: "€34",          rating: 5,
          reviewCount: "98",          imageSrc: "http://img.b2bpic.net/free-photo/vertical-view-delicious-cakes-blue-tray-biscuits-dark-background_140725-91971.jpg"},
        {
          id: "p3",          brand: "Main Course",          name: "Aged Wagyu Beef Tenderloin",          price: "€56",          rating: 5,
          reviewCount: "210",          imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-green-pesto-sauce-with-peanuts_114579-2434.jpg"},
        {
          id: "p4",          brand: "Main Course",          name: "Roasted Herb-Crusted Lamb",          price: "€42",          rating: 5,
          reviewCount: "85",          imageSrc: "http://img.b2bpic.net/free-photo/grilled-lobster-tail-with-herbs-strawberries-black-plate_84443-94406.jpg"},
        {
          id: "p5",          brand: "Dessert",          name: "Dark Chocolate Ganache",          price: "€16",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/white-plate-with-baked-vegetables-stands-barrel_1304-4659.jpg"},
        {
          id: "p6",          brand: "Dessert",          name: "Lemon Infused Panna Cotta",          price: "€14",          rating: 5,
          reviewCount: "112",          imageSrc: "http://img.b2bpic.net/free-photo/top-close-up-view-plate-appetizing-dish-stuffed-cabbage-with-herbs-lemon-sauce-white-plate-black-surface_140725-117284.jpg"},
      ]}
      title="The Culinary Menu"
      description="A refined menu reflecting seasonal excellence and timeless culinary mastery."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "view-1",          price: "Elegant",          name: "Main Dining Hall",          features: [
            "Spacious minimalist layout",            "Natural warm lighting",            "Breathtaking architectural view"],
          buttons: [
            {
              text: "Reserve Now",              href: "#reservation"},
          ],
        },
        {
          id: "view-2",          price: "Exclusive",          name: "Private Chef's Table",          features: [
            "Intimate atmosphere",            "Chef-curated tasting menu",            "Private butler service"],
          buttons: [
            {
              text: "Reserve Now",              href: "#reservation"},
          ],
        },
        {
          id: "view-3",          price: "Classic",          name: "Outdoor Garden Terrace",          features: [
            "Quiet serene environment",            "Seasonal aesthetic",            "Perfect for summer evenings"],
          buttons: [
            {
              text: "Reserve Now",              href: "#reservation"},
          ],
        },
      ]}
      title="A Visual Journey"
      description="Every detail at Syrisches Haus is meticulously designed for your ultimate comfort and pleasure."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Julianne Thorne",          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517442.jpg"},
        {
          id: "t2",          name: "Marcus Vane",          imageSrc: "http://img.b2bpic.net/free-photo/friends-eating-conversating-restaurant_23-2148006707.jpg"},
        {
          id: "t3",          name: "Elena Rodriguez",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-blonde-woman-evening-dress-smiling-holding-wine-glass_176420-3788.jpg"},
        {
          id: "t4",          name: "Cyrus Whitmore",          imageSrc: "http://img.b2bpic.net/free-photo/elegant-couple-spend-time-restaurant_1157-20509.jpg"},
        {
          id: "t5",          name: "Sarah Jenkins",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598413.jpg"},
      ]}
      cardTitle="Guest Impressions"
      cardTag="Luxury Dining"
      cardAnimation="slide-up"
    />
  </div>

  <div id="location" data-section="location">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "Address",          content: "123 Gourmet Avenue, Gastronomy Plaza, City Center"},
        {
          id: "q2",          title: "Opening Hours",          content: "Monday - Sunday: 18:00 - 23:00"},
        {
          id: "q3",          title: "Contact",          content: "reservations@syrischeshaus.com | +49 30 123 456"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/male-chef-kitchen-cooking_23-2148934672.jpg"
      title="Locate Us"
      description="Visit us for an unparalleled dining experience. We are conveniently situated in the heart of the city."
      faqsAnimation="slide-up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="reservation" data-section="reservation">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient"}}
      tag="Booking"
      title="Secure Your Experience"
      description="Spaces are limited to ensure the highest quality of service. We invite you to book your table in advance."
      buttons={[
        {
          text: "Reserve A Table",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Syrisches Haus",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "Private Events",              href: "#"},
          ],
        },
        {
          title: "Information",          items: [
            {
              label: "Reservations",              href: "#reservation"},
            {
              label: "Careers",              href: "#"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
        {
          title: "Social",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"},
            {
              label: "LinkedIn",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Syrisches Haus. All rights reserved."
      bottomRightText="Crafted with Passion"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
