class AddMealToGuests < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :meal, :string
  end
end
