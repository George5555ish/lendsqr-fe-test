export interface GetAllUsersApiInterface {
    accountBalance: string;
    accountNumber: string;
    createdAt: string;
    education : {
        level: string;
        employmentStatus: 'Employed' | 'Unemployed',
        sector: string;
        duration: string;
        officeEmail: string;
        loanRepayment: string;
        monthlyIncome: string[]
    }
    email: string;
    guarantor: {
        firstName: string;
        lastName: string;
        gender: string;
        address: string;
        phoneNumber: string;
    }
    id: "1";
    lastActiveDate: string;
    orgName: string;
    phoneNumber: string;
    profile: {
        firstName: string;
        lastName: string;
        gender: string;
        address: string;
        phoneNumber: string;
        avatar: string;
        bvn: string;
        currency: string
    }
    socials: {
        facebook: string;
        instagram: string;
        twitter: string
    }
    userName: string
}

export interface IndexDbSingleUserInterface {
    name: string
    keypath: string
    accountBalance: string
    accountNumber: string
    createdAt: string
    email: string
    id: string
    lastActiveDate:string
    orgName: string
    phoneNumber: string
    userName: string

    employmentStatus:string
    sector: string
    duration: string
    officeEmail: string
    loanRepayment:string
    monthlyIncome: string[],
    level:string

    guarantorFirstName: string
    guarantorLastName: string
    guarantorGender: string
    guarantorAddress: string
    guarantorPhoneNumber: string

    profileFirstName: string
    profileLastName: string
    profileGender: string
    profileAddress: string
    profilePhoneNumber: string,
    profileAvatar: string,
    profileBvn: string
    profileCurrency: string

    facebook: string
    instagram: string
    twitter: string
}