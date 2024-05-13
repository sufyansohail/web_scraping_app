# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_05_11_191620) do
  create_table "input_urls", force: :cascade do |t|
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "scraped_urls", force: :cascade do |t|
    t.string "url"
    t.string "anchor_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "input_url_id", null: false
    t.index ["input_url_id"], name: "index_scraped_urls_on_input_url_id"
  end

  add_foreign_key "scraped_urls", "input_urls"
end
