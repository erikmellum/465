class Oi < ActiveRecord::Base
  validates :name, presence: true
  validates :description, presence: true
has_many :urls, dependent: :destroy
accepts_nested_attributes_for :urls

  def pName
    name
  end
  
  def created
    created_at
  end

  def updated
    updated_at 
  end

  def pId
    uid
  end

  def self.search(search)
    where('name LIKE ?',"%#{search}%")
  end
end
