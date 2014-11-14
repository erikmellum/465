class Tag < ActiveRecord::Base
  belongs_to :image

  def self.search(search)
   where('tag_string LIKE ?', "#{search}")
  end
end
