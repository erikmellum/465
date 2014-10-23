class Url < ActiveRecord::Base
  belongs_to :oi
  validates :url, presence: true
  def created
    created_at
  end

  def updated
    updated_at
  end


end
