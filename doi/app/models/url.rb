class Url < ActiveRecord::Base
  belongs_to :oi

  def created
    created_at
  end

  def updated
    updated_at
  end


end
