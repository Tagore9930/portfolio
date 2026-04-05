export type JourneyType = {
  role: string;
  organization: string;
  location: string;
  duration: {
    start: Date;
    end: Date | null;
  };
  description: string;
  bulletPoints: string[];
  topSkills: { name: string; officalLink: string }[];
};

/*-------| Contact Us |--------------*/

export type ContactUsType = {
  email: string;
  fullName: string;
  subject: string;
  phoneNumber?: string;
  message?: string;
};
