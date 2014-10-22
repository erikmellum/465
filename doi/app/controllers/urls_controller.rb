class UrlsController < ApplicationController
  before_action :set_url, only: [:edit, :update, :destroy]

  # GET /urls/1
  # GET /urls/1.json
  def show
  end

  # GET /urls/new
  def new
    @oi = Oi.find params[:oi_id]
    @url = @oi.urls.new
  end

  # GET /urls/1/edit
  def edit
  end

  # POST /urls
  # POST /urls.json
  def create
    @oi = Oi.find params[:oi_id]
    @url = @oi.urls.new(url_params) 
    if @url.save
      redirect_to oi_url(@oi) , notice: 'Url was created successfully.'
    else  
      render :new
    end
end

  # PATCH/PUT /urls/1
  # PATCH/PUT /urls/1.json
  def update
    if @url.update(url_params)
      redirect_to oi_url(@url.oi), notice: 'Url was successfully updated.' 
    else
      render :edit  
    end

  end

  # DELETE /urls/1
  # DELETE /urls/1.json
  def destroy
    @url.destroy
   redirect_to oi_url(@url.oi), notice: 'Url was successfully destroyed.' 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_url
      @url = Url.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def url_params
      params.require(:url).permit(:url)
    end
end
