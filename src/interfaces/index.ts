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