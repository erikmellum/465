json.array!(@accesses) do |access|
  json.extract! access, :id, :image_id, :user_id
  json.url access_url(access, format: :json)
end
