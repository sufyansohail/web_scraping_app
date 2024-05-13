Rails.application.routes.draw do

  root 'scraping#index'
  post 'scraping/scrape_url', to: 'scraping#scrape_url'

end
