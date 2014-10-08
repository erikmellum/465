class WladderController < ApplicationController

require "#{Rails.root}/lib/words5.rb"
require "#{Rails.root}/lib/ladder.rb"

def index
  @wladder = Array.new(7);
  @wladder[0] = dictionary.sample
  @wladder[6] = dictionary.sample
end

def check
  @wladder= Array.new(7);
  @wladder[0] = params[:step0]
  @wladder[1] = params[:step1]
  @wladder[2] = params[:step2]
  @wladder[3] = params[:step3]
  @wladder[4] = params[:step4]
  @wladder[5] = params[:step5]
  @wladder[6] = params[:step6]
  @result = "You lose!"  
  @result = "You win!" if legal @wladder

end

end
