class CreateScrapedUrls < ActiveRecord::Migration[7.1]
  def change
    create_table :scraped_urls do |t|
      t.string :url
      t.string :anchor_text

      t.timestamps
    end
  end
end
