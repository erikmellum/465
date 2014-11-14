# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = User.create(
  [
    { email: 'a@a.com', name: 'a', password: 'a', password_confirmation: 'a'},
    { email: 'b@b.com', name: 'b', password: 'b', password_confirmation: 'b'},
    { email: 'c@c.com', name: 'c', password: 'c', password_confirmation: 'c'},
    { email: 'd@d.com', name: 'd', password: 'd', password_confirmation: 'd'},
    { email: 'e@e.com', name: 'e', password: 'e', password_confirmation: 'e'},

  ]
)
images = Image.create(
  [
   {filename: "2C7kFNe.gif", public_private: true, user_id: 1},
   {filename: "7QxYMbC.gif", public_private: false, user_id: 2},
   {filename: "8pJX8Yh.gif", public_private: true, user_id: 3},
   {filename: "idiot.gif", public_private: false, user_id: 5},
   {filename: "moneyBath.gif", public_private: true, user_id: 1},
   {filename: "stopit.gif", public_private: false, user_id: 2},
   {filename: "shotMachine.gif", public_private: true, user_id: 1},  
   {filename: "priceIsRight.gif", public_private: false, user_id: 2},
   {filename: "simon.gif", public_private: false, user_id: 5},
   {filename: "typing.gif", public_private: true, user_id: 4},
   {filename: "fallasleep.gif", public_private: false, user_id: 4},
   {filename: "qGqnul3.gif", public_private: true, user_id: 1}
  ]

)
accesses = Access.create(
  [
    {image_id: 2, user_id: 1},
    {image_id: 2, user_id: 2},
    {image_id: 4, user_id: 1},
    {image_id: 4, user_id: 5},
    {image_id: 6, user_id: 4},
    {image_id: 6, user_id: 3}, 
  ]
)

tags = Tag.create(
  [
    {tag_string: "Rich", image_id: 1},
    {tag_string: "Cute", image_id: 2},
    {tag_string: "Badass", image_id: 3},
    {tag_string: "Idiocracy", image_id: 4},
    {tag_string: "Weather", image_id: 5},
    {tag_string: "Attitude", image_id: 6},
    {tag_string: "College", image_id: 7},
    {tag_string: "After College", image_id: 8},
    {tag_string: "My life", image_id: 9},
    {tag_string: "Rails", image_id: 10},
    {tag_string: "Sleepy", image_id: 11},
    {tag_string: "Centripetal Acceleration causing 'Centripetal Force'", image_id: 12},
    {tag_string: "Wow", image_id: 2},
    {tag_string: "Impress", image_id: 2},
  ]
)

