class UrlsController < ApplicationController
  before_action :set_url, only: [:show, :edit, :update, :destroy]

  # GET /urls
  # GET /urls.json
  def index
    @doi = Oi.find params[:oi_id]
    @urls = @doi.urls
    #  @urls = Url.all
  end

  # GET /urls/1
  # GET /urls/1.json
  def show
  end

  # GET /urls/new
  def new
    @doi = Oi.find params[:oi_id]
    @url = @doi.urls.new
  end

  # GET /urls/1/edit
  def edit
  end

  # POST /urls
  # POST /urls.json
  def create
    @doi = Oi.find params[:oi_id]
    @url = @doi.urls.new(url_params) 
    if @url.save
      redirect_to oi_urls_url(@oi) , notice: 'Url was created successfully.'
    else  
      render :new
    end
end

  # PATCH/PUT /urls/1
  # PATCH/PUT /urls/1.json
  def update
    if @url.update(url_params)
      redirect_to oi_ratings_url(@url.oi), notice: 'Url was successfully updated.' 
    else
      render :edit  
    end

  end

  # DELETE /urls/1
  # DELETE /urls/1.json
  def destroy
    @url.destroy
   redirect_to oi_ratings_url(@url.oi), notice: 'Url was successfully destroyed.' 
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_url
      @url = Url.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def url_params
      params.require(:url).permit(:url, :oi_id)
    end
end
