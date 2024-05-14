# README

# Web Scraping App

Web Scraping App is a tool used to scan and extract links from the HTML of a web page.

## Ruby Version

- Ruby Version: 3.2.0

## System Dependencies

- Rails Version: 7.1.0
- Vue JS Version: 3.3
- Tailwind CSS library included for styling

## Configuration

Clone the project from GitHub:
````
git clone https://github.com/sufyansohail/web_scraping_app.git
````


Install dependencies by running:
````
bundle install
````


This application is built with Rails 7, which uses Importmap for managing JavaScript dependencies. Vue and Redaxios are pinned in the importmap, so there's no need for users to run any additional commands for local servers.

## Database Initialization

Initialize the database by running the following commands:

````
rails db:create
rails db:migrate
````

## Run local server in Rails 7

In Rails 7, You can run local server by any of below command:
````
rails s
./bin/dev
````

## Handling Secrets in Rails 7

In Rails 7, secrets are managed using the credentials file. Follow these steps to handle secrets:

1. Generate a secret key by running:

````
rails secret
````

2. Update the credentials file using your preferred text editor. For example:

````
EDITOR=nano rails credentials:edit --environment development
````

3. Update your secrets in the credentials file. Since SQLite is used, no passwords are required.

## Model Description

The Web Scraping App includes two models: one for storing HTML page URLs and another for storing extracted URLs from those pages. While it's possible to show histories using the Input URL model and previous search URLs, this functionality has not been implemented in the provided description.

