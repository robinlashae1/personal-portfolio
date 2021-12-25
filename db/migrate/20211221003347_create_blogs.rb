class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :preview
      t.string :url

      t.timestamps
    end
  end
end
