export interface Feature {
  name: string;
  talents: boolean;
  managers: boolean;
  agencies: boolean;
}

export interface Plan {
  name: string;
  key: keyof Omit<Feature, "name">;
}
