class AddImageIdxToCarlisting < ActiveRecord::Migration[5.2]
  def change
    add_column :carlistings, :imageIdx, :integer, null: false
  end
end
