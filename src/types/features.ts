export interface SectionProps {
  section: SectionData;
}

export interface Feature {
  title: string;
  description: string;
  fullWidth?: boolean;
}

export interface SectionData {
  id: string;
  title: string;
  subtitle: string;
  features: Feature[];
  hasButton?: boolean;
}
