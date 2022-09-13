<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Fooji Todo Restful Api</h3>

  <p align="center">
    Fooji Todo Restful Api, was built using nestjs, mariadb, typescript and nodejs
    <br />
    <a href="https://docs.nestjs.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

Here's a blank template to get started: To avoid retyping too much info. Do a search and replace with your text editor for the following: `github_username`, `repo_name`, `twitter_handle`, `linkedin_username`, `email_client`, `email`, `project_title`, `project_description`

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Nest][Nest.js]][Nest-url]
<!-- * [![TypeScript][TypeScript]][TrypeScript]
* [![Nodejs][Nodejs]][Nodejs] -->
* [![TypeOrm][typeorm.io]][typeorm.io-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* nodejs > v16.15.0
  ```js
  `https://nodejs.org/en/download/`
  ```
* vscode 
  ```js
  `https://code.visualstudio.com/download`
  ```
* mariadb (Xampp)
  ```js
  `https://www.apachefriends.org/download.html`
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```
* Tunderbolt extension on vscode
  ```js
  `https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client`
  ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/Nanle21/todo-node.git
   ```
2. cd to the directory
  ```sh
  cd todo-node
  ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your mysql or mariadb details in `app.module.ts`
   ```js
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: null,
      database: 'sample',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Here are the following links available to the restful api
```js
  'http://localhost:3001/todos' => get //this could be used to get all todos on the database
  'http://localhost:3001/todos' => post //this could be used to add a new todo to the database
  `http://localhost:3001/todos/${id}` => get //this could be used to get a specific item in the database
  `http://localhost:3001/todos/${id}` => patch //this could be used to edit a specific item in the database
  `http://localhost:3001/todos/${id}` => delete //this could be used to delete a specific item in the database
  
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
<!-- ## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/github_username/repo_name/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p> -->



<!-- CONTRIBUTING -->
## Contributing

Sorry no contribution for now

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `MIT.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Nanle Luke - [@twitter_handle](https://twitter.com/nanle_paul) - paulnanle611@gmail.com

Project Link: [https://github.com/Nanle21/todo-node.git](https://github.com/Nanle21/todo-node.git)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [FooJi]()


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Nest-url]: https://nestjs.com/
[Nest.js]:https://d33wubrfki0l68.cloudfront.net/e937e774cbbe23635999615ad5d7732decad182a/26072/logo-small.ede75a6b.svg
[typeorm.io-url]: https://typeorm.io/
[typeorm.io]:https://raw.githubusercontent.com/typeorm/typeorm/master/resources/logo_big.png