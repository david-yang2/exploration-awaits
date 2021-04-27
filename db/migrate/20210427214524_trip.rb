class Trip < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.integer "car_id", null: false
      t.float "beg_longitude", null: false
      t.float "beg_latitude", null: false
      t.float "end_longitude", null: false
      t.float "end_latitude", null: false
    end
  end
end
