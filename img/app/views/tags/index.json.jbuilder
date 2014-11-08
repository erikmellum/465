json.array!(@tags) do |tag|
  json.extract! tag, :id, :tag_string, :image_id
  json.url tag_url(tag, format: :json)
end
