class AddNotesToGuests < ActiveRecord::Migration[5.2]
  def change
    add_column :guests, :notes, :string
  end
end
