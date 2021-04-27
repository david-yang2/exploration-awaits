class CarListing < ActiveRecord::Migration[5.2]
  def change
    create_table :carlistings do |t|
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
      t.boolean "rooftoptent", null: false
      t.boolean "shower", null: false
      t.boolean "kitchenset", null: false
      t.boolean "fridge", null: false
      t.float "longitude", null: false
      t.float "latitude", null: false
    end
  end
end
