class Family < ActiveRecord::Base

  has_many :members, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :images, dependent: :destroy
end
