// main container
type ControllerData = {
    bio: Bio;
    exp: Experience[];
    proj: Project[];
    educ: Education[];
}

// sections
type Bio = {
    fname: string;
    lname: string;
    fullName: string;
    phone: string;
    email: string;
    info: string;
}

type Experience = {
    title: string;
    info: string;
    start: MonthYear;
    end?: MonthYear;
    details: string[];
    projects: Project[];
}

type Education = {
    school: string;
    degree: string;
    details: string[];
    start: MonthYear;
    end?: MonthYear;
}

type Project = {
    title: string;
    date: MonthYear;
    company: string;
    url?: string;
    info?: string;
    details?: string[];
    tech?: string[];
}

// util
type MonthYear = {
    m: number;
    y: number;
}

export {
    ControllerData,
    Bio,
    Experience,
    Education,
    Project,
    MonthYear,
};
