class Tag < ActiveRecord::Base
  belongs_to :image

  def self.search(search)
   where('tag LIKE ?', "%#{search}%")
  end
end
