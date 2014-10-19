class Oi < ActiveRecord::Base
    
  has_many :urls, dependent: :destroy

  def name
    name
  end

end
