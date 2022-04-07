class CreateGifs < ActiveRecord::Migration[5.0]
  def change
    create_table :gifs do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.integer :likes, default: 0
    end
  end
end
