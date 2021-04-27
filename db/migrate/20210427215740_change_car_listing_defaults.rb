class ChangeCarListingDefaults < ActiveRecord::Migration[5.2]
  def up
    change_column :carlistings, :rooftoptent, :boolean, default: false
    change_column :carlistings, :shower, :boolean, default: false 
    change_column :carlistings, :kitchenset, :boolean, default: false
    change_column :carlistings, :fridge, :boolean, default: false
  end

  def down
    change_column :carlistings, :rooftoptent, :boolean, default: nil
    change_column :carlistings, :shower, :boolean, default: nil 
    change_column :carlistings, :kitchenset, :boolean, default: nil
    change_column :carlistings, :fridge, :boolean, default: nil
  end
end
