class AddImageToCarlisting < ActiveRecord::Migration[5.2]
  def change
    add_column :carlistings, :coverImage, :string
  end
end
