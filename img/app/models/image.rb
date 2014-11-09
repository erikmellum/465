class Image < ActiveRecord::Base
  belongs_to :user
  has_many :accesses 
  has_many :users, through: :accesses
  has_many :tags
end
