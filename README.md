<h1 align="center">
  <a href="https://github.com/theTrackSuitDev/SPDB-angular">
    <img src="https://prikachi.net/images/2024/04/03/logo-letters.png" alt="Logo" width="200" height="80">
  </a>
</h1>

<div align="center">
  Student project database. A project sharing platform.

  <a href="https://github.com/theTrackSuitDev/SPDB-angular/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/theTrackSuitDev/SPDB-angular/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  ·
  <a href="https://github.com/theTrackSuitDev/SPDB-angular/discussions">Ask a Question</a>
</div>

<div align="center">


[![license](https://img.shields.io/github/license/theTrackSuitDev/SPDB-angular.svg?style=flat-square)](LICENSE)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [App Usage](#app-usage)
- [Source code structure](#source-code-structure)
- [Known issues and limitations](#known-issues)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)
- [Acknowledgements](#acknowledgements)

</details>

---

## About

<table>
<tr>
<td>

The Student Project Database is actually a student project itself. A student project about student projects. It's a single page web application built as a course project during the Angular course at the SoftUni academy in February/March 2024. The app has educational and demo purposes only. It solely aims to showcase the learnt techniques in using the Angular framework to build interactive web applications.

The use-case concept behind the application is to provide a platform where students would be able the showcase their projects by sharing and presenting them to the community. At the same time, SPDB could serve as idea source for students who struggle to decide what project they want to build. Lastly, the application would facilitate users to get and leave valuable feedback about the projects on the platform.

Key features of **The Student Project Database**:

- Interactivity built using the Angular framework
- Different dynamic pages that fetch data from the back-end, allowing their content to change with the application state (All Project page, Project Details page and Edit Project page)
- Specific pages for listing records and record details
- Communication to a remote service (a REST api, provided in the Resources folder)
- Authentication implementation allowing users to Register and Login in order to access the full features of the app
- Public part (accessible without authentication) and Private part (available for registered users)
- Implementation of all CRUD operations (create, read, update, delete)
- More than 5 routers, handling various paths
- Built with TypeScript with specific types, interfaces, pipes, observables and subjects
- Implementation of user friendly and informative error handling and data validation
- Route guards for the Public and Private parts as well as front-end protection against unauthorized activities
- Consistent and easily trackable development process with more than 60 meaningful commits to GitHub during a period of more than 3 weeks.

Bonus features:

- Simplistic easy-to-use design
- Various animations on different pages
- Interactive Nagigation bar tacking the active path
- Usage of SVG images (SPDB logos, titles, and icons)
- Lazy loading implementation on the Projects Module
- Pagination implementation (All Projects page)
- Usage of FontAwesome icons
- Hover tooltips (for missing external links on the Details page)


<details open>
<summary>Additional info</summary>
<br>

SPDB is specifically built for the educational purposes of the Angular Course at the SoftUni academy. Back-end technologies are outside of the course scope. The app is intended to use a slightly modified version of the RESTful API provided and built by the SoftUni academy for the workshop exercises. SPDB is developed with aim to be functional with minimum possible modifications of the REST api, hence to cope with the API limitations on the front-end and avoid API modification as much as possible.

HTML/CSS are outside of the Angular course scope. Futhermore, they're part of the next course in the SoftUni academy learning path. The SPDB app is built with only basic knowledge and little experience in HTML/CSS. The basic and non-responsive design is tested intended to work on FHD resolution and 16:9 aspect ratio. 

</details>

</td>
</tr>
</table>

### Built With

- [Angular Framework version 16.2.12](https://angular.io/cli)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [angular-fontawesome](https://github.com/FortAwesome/angular-fontawesome)
- [angular-animations](https://github.com/filipows/angular-animations)
- and more

## Getting Started

### Prerequisites

In order to run the app locally, you must have installed and running:
- [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- [Node.Js with NPM](https://nodejs.org/en/download)
- [Angular version 16.2.12](https://github.com/angular/angular-cli)

First, ensure the MongoDB server is running and uses the default port 27017.

Then open a terminal of you choice and navigate to the 'Rest-api' folder, provided in the SPDB repo.

Install the API dependencies:
```sh
npm install
```

Run the back-end server:
```sh
npm start
```

Ensure the server is running on the default port 3000. If successful, you should see the following message on the console:
```sh
Listening on port 3000!
```

Open a new terminal and navigate to the SPDB-Angular folder.
Install the dependencies (may taka a while):
```sh
npm install
```

Run the client server:
```sh
ng serve
```
Ensure the server is running on the default port 4200. If successful, you should see the following message on the console:
```sh
** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
```
You're all set! Open your browser on http://localhost:4200/ and enjoy using the SPDB web app locally! 

#### Optional (DB restore)

After successfully starting the app, you may use the DB backup json files(provided in the SPDB resources folder) to restore some DB entries. 

The recommended approach is to install and use the [MongoDB Compass GUI](https://www.mongodb.com/products/tools/compass).

1. Install and run [MongoDB Compass GUI](https://www.mongodb.com/products/tools/compass)

2. Connect to the MongoDB local server. The default address is 'mongodb://localhost:27017'.

3. In the Databases dropdown search for the database named projectDb. If missing, use GUI "Create database" button and create one with that exact name.

4. The 'projectDb' database must contain 'themes' and 'users' collections. If missing, use GUI "Create collection" button and create collections with those exact names.

5. Open each of the two collections and use Add data -> Import JSON buttons to import the provided resource files.

You now have a set of of test projects, as well as 3 test users:
| Username                       | Email     | Password                                                                 |
| -------------------------- | ------------------ | --------------------------------------------------------------------------- |
| Miro          | miro@abv.bg | 1234                                                         |
| Pesho                  | pesho@abv.bg | 1234                          |
| Gosho           | gosho@abv.bg            | 1234


## App Usage

Opening your browser on http://localhost:4200/ will lend you one Home page. At this point, only the Public Part of the app will be visible. Use the navigation bar to explore the platform.

<details>
<summary>!Note</summary>
<br>

!Note: Opening the dev tools on your browser you may see a 401 response when you first load the page. This is expected behavior related to the authentication procedure used by the app on refresh. The user authentication status is being checked via a http request to the API. This approach is specifically supported by the API, provided by the SoftUni academy and was also used during the Angular workshop exercises. 

</details>

## Source code structure

#### Modular approach

The SPDB app demonstrates a modular approach by including 4 separated modules:

1. Core Module - Containing components always present throughout the app functioning (Header, Footer and Navigation)

2. Projects Module - Containing components related with the main platform resource - the projects as well as specific routing module

3. User Module - Containing components related with the users as well as specific routing module

4. Shared Modules - Containing components used by various different modules (such as loader, toast, pipe and a set of custom validators)

#### Global components

Despite being a modular Angular web application SPDB also tries to demonstrate the modern Angular tendencies by having several global components, grouped in a separate folder. Those are mainly static pages, such as the Home page, About page as well a specific Auth component used for authentication purposes by checking the user authentication status via http request to the API.

#### TypeScript

The SPDB app uses TypeScript with specific types, interfaces, pipes, observables and subjects. The used types are organized in a separate folder.

#### Services and Route Guards

The app includes separate service for API interactions, Authentication procedures and Error handling.

The app Route Guards are organized in a separate folder and are built using the cotemporary CanActivateFn functional approach.

#### Others

A global routing module, assets folder and environments are also present, as well as a global interceptor, used to decorate the API routes, ensure that user credentials are provided and process errors before passing them to the error handling service. 

## Known issues

- Basic and unresponsive design
- Lacking features for more detailed feedback (such as comments and likes)
- 401 server response on initial load or on refresh when not logged (expected behavior, explained [above](#app-usage), see !Note)
- Despite being handled and presented to the user with a toast, some errors may come with a 500 response status, which is caused by an API limitation (very basic global error handler on the back-end)
- The app does not store authentication data in the local/session storage, but reads the cookie to immediately check the user status. In order for the cookie to be accessible, the API sends it without the 'http-only' flag, which may be considered a security vulnerability. 


## Contributing

The app has educational and demo purposes only. The author do not expect or require any contributions. SPDB solely aims to showcase the learnt techniques in using the Angular framework to build interactive web applications.

However anyone is free to give feedback, request a feature, report a bug or a start a discussion

## Support

Reach out to the author:

- [SPDB repo discussions](https://github.com/theTrackSuitDev/SPDB-angular/discussions)


## License

This project is licensed under the **MIT license**. 

See [LICENSE](LICENSE) for more information.

!Note: The info and pictures used for the test projects in the DB backup are used with educational, demonstrative and absolutely non-profit purposes! The author of the SPDB web app does not own, nor claims copyrights on them. 

## Acknowledgements

Special thanks to the authors of the used packages, which can be found in package.json file, under dependencies. 

Also, kudos to the [WebDevs Telegram community](https://t.me/+VN2i12PAynpiNDBk) for providing friendly support and helpful advices during the development.

This documentation is based on the [amazing-github-template](https://github.com/dec0dOS/amazing-github-template).
