json.array!(@ois) do |oi|
  json.extract! oi, :id, :name, :description
  json.url oi_url(oi, format: :json)
end
