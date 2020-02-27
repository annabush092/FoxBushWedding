class AddBrunchToGuests < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :brunch, :bool
  end
end
