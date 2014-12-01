class Member < ActiveRecord::Base
  belongs_to :family
  has_many :relationships, dependent: :destroy
  has_many :events, dependent: :destroy
  has_many :images, dependent: :destroy
  has_many :milestones, dependent: :destroy
  has_many :hobbies, dependent: :destroy

  
end
