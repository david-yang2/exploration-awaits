class Booking < ActiveRecord::Migration[5.2]
  def change
    create_table :bookings do |t|
      t.integer :car_id, null: false
      t.integer :user_id, null: false
      t.date :pickup_date, null: false
      t.date :dropoff_date, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
