export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, unknown>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    description?: string;
    featured_image?: CosmicImage;
    category?: string;
    project_url?: string;
  };
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    icon?: string;
    short_description?: string;
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    role?: string;
    bio?: string;
    headshot?: CosmicImage;
    linkedin_url?: string;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    company?: string;
    quote?: string;
    rating?: number;
    client_photo?: CosmicImage;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}