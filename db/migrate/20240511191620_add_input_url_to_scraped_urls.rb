class AddInputUrlToScrapedUrls < ActiveRecord::Migration[7.1]
  def change
    add_reference :scraped_urls, :input_url, null: false, foreign_key: true
  end
end
