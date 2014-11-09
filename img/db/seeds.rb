# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
users = User.create(
  [
    { email: 'a@a.com', password: 'a', password_confirmation: 'a'},
    { email: 'b@b.com', password: 'b', password_confirmation: 'b'},
    { email: 'c@c.com', password: 'c', password_confirmation: 'c'}
  ]
)
images = Image.create(
  [
    {filename: "SomeName", public_private: true},
    {filename: "AnImage", public_private: false}
  ]

)
accesses = Access.create(
  [
    {image_id: 1}
  ]
)

tags = Tag.create(
  [
    {tag_string: "My Tag"}
  ]
)

