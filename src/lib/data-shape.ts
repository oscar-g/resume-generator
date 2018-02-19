// main container
type ControllerData = {
  bio: Bio;
  exp: Experience[];
  proj: Project[];
  edu: Education[];
};

// sections
type Bio = {
  fname: string;
  lname: string;
  fullName: string;
  location: string;
  phone: string;
  email: string;
  title: string;
  info?: string;
};

type Experience = {
  title: string;
  company: string;
  start: MonthYear;
  end?: MonthYear;
  location: string;
  details?: string[];
};

type Education = {
  school: string;
  degree: string;
  start: MonthYear;
  end?: MonthYear;
  location: string;
  details?: string[];
};

type Project = {
  title: string;
  date: MonthYear;
  company: string;
  url?: string;
  info?: string;
  details?: string[];
  tech?: string[];
};

// util
type MonthYear = {
  m: number;
  y: number;
};

export {
  ControllerData,
  Bio,
  Experience,
  Education,
  Project,
  MonthYear,
};
