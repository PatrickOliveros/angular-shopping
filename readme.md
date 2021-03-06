# Shopping Cart Application with Stripe SDK Integration

## Key Technologies
* .NET Core 5
* ASP.NET Identity
* Angular 12
* Stripe SDK
* SQLite
* PostgreSQL

<p>&nbsp;</p>

## Stripe Integration
* Create an account in this [link.](https://dashboard.stripe.com/test/dashboard)
* Test credit cards can be found in this [link.](https://stripe.com/docs/testing#regulatory-cards)

<p>&nbsp;</p>

## Running the Application
The application is written to follow the repository pattern. There are two datastores that were used in creating this application - SQLite and PostgreSQL. All fields in the configuration is required. On startup, the application will run the proper seeding, if all values are correct.
<p>&nbsp;</p>

This application is based off the Udemy [Course](https://www.udemy.com/course/learn-to-build-an-e-commerce-app-with-net-core-and-angular/) but has been upgraded from Angular 11 to Angular 12, and with some components refactored for easier reading. 
<p>&nbsp;</p>

### What's added from the course?
---
* Modified appsettings schema
* AppSettings validation
* JWToken validation
* Added helper methods for Token validation
