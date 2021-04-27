class Review < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :carlisting_id, null: false
      t.integer :user_id, null: false
      t.text :body, null: false
      t.integer :rating, null: false
      t.datetime :created_at, null: false
      t.datetime :updated_at, null: false
    end
  end
end
