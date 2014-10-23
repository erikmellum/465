class CreateOis < ActiveRecord::Migration
  def change
    create_table :ois do |t|
      t.string :name
      t.string :description
      t.string :uid
      t.timestamps
    end
  end
end
