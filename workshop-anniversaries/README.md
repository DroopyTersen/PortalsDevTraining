# Anniversaries Workshop

1. [Requirements](#-Requirements-+-Design)
2. [List Schema](#-List-Schema)
3. [Generate Web Part - TODO](#Generate-Web-Part)
4. [Rendering UI](#Rendering-UI)
5. [Data Access - TODO](#Data-Access)
6. [Complete Component Data - TODO](#Complete-Component-Data)


## Requirements + Design
### User Story
As a visitor to my intranet, I would like to see a list of current work Anniversaries for active associates at my company.

### Web Part Display
* Display employee name, number of years of service, anniversary date and department
* Display upcoming 2 weeks of anniversaries
* Sort by upcoming anniversaries first
* (Extra Credit) Employee name links to the Delve profile page

### Web Part Configuration
* (Nice to Have) Ability to configure the max items to display

### Data Management
* list driven employees
* Home page editors allowed to contribute, everyone else read

### Out of Scope
* Will not display the employee's profile photo

### Mockup
![alt text](./Anniversaries-Workshop-2.png "Anniversaries")
![alt text](./Anniversaries-Workshop.png "Anniversaries")

## List Schema
1. Create a SharePoint "Custom List"
2. Name: Employees
3. Add fields:

    | Internal Name       | Type           
    | ------------- |-------------
    | Title       | single line of text
    | EmployeeName| people picker      
    | Anniversary | date
    | Department  | choice, dropdown

4. Add new list items with several different Anniversary dates.

## Generate Web Part

## Rendering UI
### Component Design
1. Determine the components needed based off the web part mockup
2. Create the component structure within the project

### Setup Mockdata
1. Create a new "data" folder
2. Create a new .ts file for mockdata
3. Use a default export, so we can reference the mockdata in our display

```ts
export default [
    {
        anniversary: 2012-08-01T07:00:00Z,
        employeeName: {
            userName: "Otto, Sarah",
            email: "sotto@skylinespark.onmicrosoft.com",
            firstName: "Sarah",
            lastName: "Otto"
        },
        department: "Portals and Collaboration"
    },
    {
        anniversary: 2016-08-08T07:00:00Z,
        employeeName: {
            userName: "Petersen, Andrew",
            email: "apetersen@skylinespark.onmicrosoft.com",
            firstName: "Andrew",
            lastName: "Petersen"
        },
        department: "Custom Software"
    },
    {
        anniversary: 2017-08-10T07:00:00Z,
        employeeName: {
            userName: "Doe, John",
            email: "jdoe@skylinespark.onmicrosoft.com",
            firstName: "John",
            lastName: "Doe"
        },
        department: "Data Analytics"
    },
    {
        anniversary: 2017-08-14T07:00:00Z,
        employeeName: {
            userName: "Fisette, Libby",
            email: "lfisette@skylinespark.onmicrosoft.com",
            firstName: "Libby",
            lastName: "Fisette"
        },
        department: "Leadership"
    },
    {
        anniversary: 2007-08-30T07:00:00Z,
        employeeName: {
            userName: "Raasch, Rachel",
            email: "rraasch@skylinespark.onmicrosoft.com",
            firstName: "Rachel",
            lastName: "Raasch"
        },
        department: "Portals and Collaboration"
    },
]
```

## Data Access

## Complete Component Data
