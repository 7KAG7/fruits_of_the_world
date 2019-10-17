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

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2019_10_16_213124) do
=======
<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2019_10_17_175055) do
=======
ActiveRecord::Schema.define(version: 2019_10_16_142630) do
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
>>>>>>> ba31383b0054ca5c9330a38f5c4dfb5b3a412cb4

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "fruits", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.string "sci_name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

<<<<<<< HEAD
  create_table "reviews", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "fruit_id"
    t.integer "rating", null: false
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["fruit_id"], name: "index_reviews_on_fruit_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

=======
>>>>>>> 1b08bdae90a07595cace82381c555062ff1df098
  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
<<<<<<< HEAD
    t.string "role", default: "member", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
=======
    t.string "name", null: false
    t.string "location"
    t.string "favorite_fruit"
>>>>>>> ba31383b0054ca5c9330a38f5c4dfb5b3a412cb4
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

end
