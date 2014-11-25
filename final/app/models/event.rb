class Event < ActiveRecord::Base
  has_many :members
  belongs_to :family
end
