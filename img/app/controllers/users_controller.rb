class UsersController < ApplicationController
 def index
   @user = current_user
   @images = Image.all
   @private_images = @user.images.map{|i| i if i.user != @user}.compact
   @user_images = @images.map{|i|i if i.user == @user}.compact
   @public_images = ((@images.map{|i|i if i.public?} - @user_images) - @private_images).compact
 end
end
