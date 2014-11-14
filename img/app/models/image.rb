class Image < ActiveRecord::Base
  belongs_to :user
  has_many :accesses, dependent: :destroy
  has_many :users, through: :accesses
  has_many :tags, dependent: :destroy
  accepts_nested_attributes_for :tags
  accepts_nested_attributes_for :accesses
  validates :filename, presence: true

  def public?
    self[:public_private]
  end
  
  def generate_filename
    write_attribute(:filename, ('a'..'z').to_a.shuffle[0,8].join)
  end

  def get_eligible_users
    users
  end

end
