export type JourneyType = {
  role: string,
  organization: string,
  location: string,
  duration: {
    start: Date,
    end: Date | null
  },
  description: string,
  bulletPoints: string[],
  topSkills: { name: string, officalLink: string }[],
}
