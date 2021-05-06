class AddLocationToCarlisting < ActiveRecord::Migration[5.2]
  def change
    add_column :carlistings, :location, :string, null: false
  end
end
