export const endpoints = {
  GET_ALL_USERS:
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
};

export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "singleuser",
      storeConfig: { keyPath: "id", autoIncrement: false },
      storeSchema: [
        {
          name: "name",
          keypath: "accountBalance",
          accountBalance: "accountBalance",
          accountNumber: "accountNumber",
          createdAt: "createdAt",
          email: "email",
          id: "id",
          lastActiveDate: "lastActiveDate",
          orgName: "orgName",
          phoneNumber: "phoneNumber",
          userName: "userName",

          employmentStatus: "employmentStatus",
          sector: "sector",
          duration: "duration",
          officeEmail: "officeEmail",
          loanRepayment: "loanRepayment",
          monthlyIncome: "monthlyIncome",
          level:"level",
          
          guarantorFirstName: "guarantorFirstName",
          guarantorLastName: "guarantorLastName",
          guarantorGender: "guarantorGender",
          guarantorAddress: "guarantorAddress",
          guarantorPhoneNumber: "guarantorPhoneNumber",

          profileFirstName: "profileFirstName",
          profileLastName: "profileLastName",
          profileGender: "profileGender",
          profileAddress: "profileAddress",
          profilePhoneNumber: "profilePhoneNumber",
          profileAvatar: "profileAvatar",
          profileBvn: "profileBvn",
          profileCurrency: "profileCurrency",

          facebook: "facebook",
          instagram: "instagram",
          twitter: "twitter",
          options: { unique: true },
        } 
      ],
    },
  ],
};
