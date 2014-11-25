class Relationship < ActiveRecord::Base
  belongs_to :member_one, :class_name => 'user', :foreign_key => 'member_one__id'
  belongs_to :member_two, :class_name => 'user', :foreign_key => 'member_two__id'
end
