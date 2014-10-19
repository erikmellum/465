# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ois = Oi.create(
  [
    {name: 'Google', description: 'A website for searching'},
    {name: 'Microsoft', description: 'A website for hardware'}
  ]
)

urls = Url.create(
  [
    {url: "http://www.google.com"},
    {url: "http://www.gmail.com"}
  ]
)
