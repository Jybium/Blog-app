import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionAccordion extends Schema.Component {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    question: Attribute.Text & Attribute.Required & Attribute.Unique;
    Answer: Attribute.Text & Attribute.Required & Attribute.Unique;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'button';
    icon: 'code';
  };
  attributes: {
    link: Attribute.String;
  };
}

export interface CtaCta extends Schema.Component {
  collectionName: 'components_cta_ctas';
  info: {
    displayName: 'CTA';
  };
  attributes: {
    CTAShort: Attribute.String & Attribute.Required;
    CTALong: Attribute.Text & Attribute.Required;
    CTAImage: Attribute.Media & Attribute.Required;
    CTAButton: Attribute.Component<'link.links'>;
    FeaturedPost: Attribute.Component<'featured-post.featured-post'>;
  };
}

export interface FeaturedPostFaq extends Schema.Component {
  collectionName: 'components_featured_post_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'attachment';
  };
  attributes: {
    heading: Attribute.Component<'featured-post.featured-post'>;
    accordion: Attribute.Component<'accordion.accordion', true>;
  };
}

export interface FeaturedPostFeaturedPost extends Schema.Component {
  collectionName: 'components_featured_post_featured_posts';
  info: {
    displayName: 'FeaturedPost';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.Unique;
    Description: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface FeaturedPostPricings extends Schema.Component {
  collectionName: 'components_featured_post_pricings';
  info: {
    displayName: 'Pricings';
    icon: 'briefcase';
  };
  attributes: {
    pricing: Attribute.Component<'pricing.pricing', true> & Attribute.Required;
    button: Attribute.Component<'button.button'>;
    sideNote: Attribute.Text & Attribute.Required & Attribute.Unique;
  };
}

export interface FeaturedPostTestimonial extends Schema.Component {
  collectionName: 'components_featured_post_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'cloud';
  };
  attributes: {
    Heading: Attribute.Component<'featured-post.featured-post'>;
    reviews: Attribute.Component<'review.review', true>;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'Header';
    icon: 'lightbulb';
    description: '';
  };
  attributes: {
    Logo: Attribute.Media & Attribute.Required;
    link: Attribute.Component<'link.links', true>;
    Button: Attribute.Component<'button.button', true>;
  };
}

export interface LinkLinks extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Links';
    icon: 'cursor';
  };
  attributes: {
    link: Attribute.String & Attribute.Required & Attribute.Unique;
    icon: Attribute.Media & Attribute.Required;
  };
}

export interface PricingPricing extends Schema.Component {
  collectionName: 'components_pricing_pricings';
  info: {
    displayName: 'Pricing';
    icon: 'bulletList';
  };
  attributes: {
    Title: Attribute.String & Attribute.Required & Attribute.Unique;
    price: Attribute.String & Attribute.Required & Attribute.Unique;
    Description: Attribute.String & Attribute.Required & Attribute.Unique;
  };
}

export interface ReviewReview extends Schema.Component {
  collectionName: 'components_review_reviews';
  info: {
    displayName: 'Review';
    icon: 'book';
  };
  attributes: {
    Testimony: Attribute.Text & Attribute.Required & Attribute.Unique;
    user: Attribute.Relation<
      'review.review',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.accordion': AccordionAccordion;
      'button.button': ButtonButton;
      'cta.cta': CtaCta;
      'featured-post.faq': FeaturedPostFaq;
      'featured-post.featured-post': FeaturedPostFeaturedPost;
      'featured-post.pricings': FeaturedPostPricings;
      'featured-post.testimonial': FeaturedPostTestimonial;
      'header.header': HeaderHeader;
      'link.links': LinkLinks;
      'pricing.pricing': PricingPricing;
      'review.review': ReviewReview;
    }
  }
}
