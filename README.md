Url:
https://annabush-ethanfox.herokuapp.com/

Update packages: 
bundle update

Run locally:
rails s

Publish: 
git push heroku master

Update server db:
heroku run rake db:migrate
heroku restart

To initialize db locally:
1) Check config/database.yml file, Production credentials, and change to current computer credentials. Important! Comment out existing credentials, which are required for publishing to Heroku.
2) Start Postgres server
3) rake db:create
4) rake db:migrate