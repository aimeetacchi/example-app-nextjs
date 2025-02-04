## Getting Started

First, run the `nmv use` to run node 18 which it gets from reading the .nvmrc or have node 18 or higher installed on your machine, and the run development server:
`yarn install ` - This will install all the Dependencies you need to run the app.
`yarn dev` - This starts the app.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Solution -

I have developed a Next.js application for retail (direct) customers to apply for an ISA account via an online form.
I've chosen React Hook Form for form handling due to its built-in hooks, ease of use, and robust validation capabilities.
Implemented a Login Screen, allowing users to access their accounts after successfully applying and opening an ISA with Cushon. - I haven't coded the rest but once logged in a user would be taken to their own personal dashboard that would show their accounts and withdrawals/deposits, interest they get, would be allowed to set up a direct debit to have money deposited each month, option to withdraw money if allowed, info about their ISA.

### Form Logic & Validation -

The form enforces ISA deposit limits based on tax year regulations:
New ISA accounts: Maximum deposit of £20,000 per tax year.
ISA transfers: Allows deposits of £25,000 if transferring from an existing ISA.
Implemented conditional validation rules:
If a user selects "Open a new ISA", they receive an error when attempting to transfer £25,000, ensuring compliance with deposit limits.
Integrated a tooltip explaining that, for now, only one fund can be selected, with plans to expand options in the future. Using Mui select component this would be allowed to easy upgrade later in future for options to have Multi Select.
As for intergating with backend, there would be a database somewhere maybe like DynamoDB or MySQL for the data that
is captured in the form and sent via an API either with REST or GraphQL depending on how backend would build the api. I have worked with either. I could then use React Query to query/mutate this data. Query would be used to get the data from the backend which could then be showed in the users dashbaord if they get the application after applying for the isa, a mutation would be used to add the new data to a database.

For State I could store this form data in a state manager like Redux, Context Api or Zustand, then this data could be displayed in another component after the form data has been submitted maybe like a Modal. I have installed Zustand for this example and created a formStore to store my form state so it can be passed around components as I'm using it in a modal component after you click the apply button, this is to showcase you application to check you have filled out all the details correctly. What I didn't add to the modal was a close button which would help the user know they can close this and go back to change anything info they have added wrong, at the moment you can just close the modal if you click the backdrop.

After the user is happy with the application they can submit it and the page rerenders and shows the user their application has been submitted.

I have only done parts of the code to showcase my FrontEnd skills.

### Testing -

I have installed vitest, I have added one small test just to show case some testing for navbar. But I would be testing the form logic to see if the errors appear if the user enters in the incorrect amount to deposit after they selected open a new isa and chosen a fund.

I would expect the text field - £ Deposit Amount to be in the document. then check this field is not empty as it is required, and if you have entered and you selected open a isa, the error to show - "The maximum amount you can save in an Individual Savings Account (ISA) in the UK each tax year is £20,000"

### Tech used

NextJS (React), Typescript, Vitest, Zustand, React Hook Form, Material UI,
