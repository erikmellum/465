# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
ois = Oi.create(
  [
    { name: 'Google', description:'A search company'},
    { name: 'Microsoft', description:'A hardware company'},
    { name: 'Amazon', description:'A book company'},
    { name: 'Yahoo', description:'A yahoo company'}
   
 ]
)

urls = Url.create(
  [
    { url: 'http://www.google.com', oi_id: ois[0].id},
    { url: 'http://www.gmail.com', oi_id: ois[0].id},
    { url: 'http://www.microsoft.com', oi_id: ois[1].id},
    { url: 'http://www.amazon.com', oi_id: ois[2].id},
    { url: 'http://www.aws.com', oi_id: ois[2].id},
    { url: 'http://www.prime.amazon.com', oi_id: ois[2].id},
    { url: 'http://www.yahoo.com', oi_id: ois[3].id}
  ]
)
