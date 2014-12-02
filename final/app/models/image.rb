class Image < ActiveRecord::Base
  belongs_to :member
  belongs_to :event
  belongs_to :family
end
