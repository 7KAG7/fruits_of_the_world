# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_15_182942) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "countries_tables", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "fruits_of_countries_tables", force: :cascade do |t|
    t.bigint "fruits_id"
    t.bigint "countries_id"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["countries_id"], name: "index_fruits_of_countries_tables_on_countries_id"
    t.index ["fruits_id"], name: "index_fruits_of_countries_tables_on_fruits_id"
  end

  create_table "fruits_tables", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "sci_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews_tables", force: :cascade do |t|
    t.bigint "fruit_id"
    t.bigint "user_id"
    t.text "review", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fruit_id"], name: "index_reviews_tables_on_fruit_id"
    t.index ["user_id"], name: "index_reviews_tables_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
