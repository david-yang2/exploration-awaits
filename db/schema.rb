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

ActiveRecord::Schema.define(version: 2021_05_06_213217) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.integer "car_id", null: false
    t.integer "user_id", null: false
    t.date "pickup_date", null: false
    t.date "dropoff_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "carlistings", force: :cascade do |t|
    t.integer "owner_id", null: false
    t.integer "year", null: false
    t.string "make", null: false
    t.string "model", null: false
    t.float "price", null: false
    t.string "cartype", null: false
    t.string "drivetrain", null: false
    t.string "transmission", null: false
    t.integer "tripcapacity", null: false
    t.integer "seats", null: false
    t.integer "sleeps", null: false
    t.string "lockers", null: false
    t.boolean "rooftoptent", default: false, null: false
    t.boolean "shower", default: false, null: false
    t.boolean "kitchenset", default: false, null: false
    t.boolean "fridge", default: false, null: false
    t.float "longitude", null: false
    t.float "latitude", null: false
    t.string "location", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "carlisting_id", null: false
    t.integer "user_id", null: false
    t.text "body", null: false
    t.integer "rating", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "trips", force: :cascade do |t|
    t.integer "car_id", null: false
    t.float "beg_longitude", null: false
    t.float "beg_latitude", null: false
    t.float "end_longitude", null: false
    t.float "end_latitude", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
