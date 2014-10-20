class OisController < ApplicationController
  before_action :set_oi, only: [:show, :edit, :update, :destroy]

  # GET /ois
  # GET /ois.json
  def index
    @ois = Oi.all
  end

  # GET /ois/1
  # GET /ois/1.json
  def show
  end

  # GET /ois/new
  def new
    @oi = Oi.new
  end

  # GET /ois/1/edit
  def edit
  end

  # POST /ois
  # POST /ois.json
  def create
    @oi = Oi.new(oi_params)

    respond_to do |format|
      if @oi.save
        format.html { redirect_to @oi, notice: 'Oi was successfully created.' }
      else  
        render :new
      end
    end
  end

  # PATCH/PUT /ois/1
  # PATCH/PUT /ois/1.json
  def update
    respond_to do |format|
      if @oi.update(oi_params)
        format.html { redirect_to @oi, notice: 'Oi was successfully updated.' } 
      else
        render :edit 
      end
    end
  end

  # DELETE /ois/1
  # DELETE /ois/1.json
  def destroy
    @oi.destroy
    respond_to do |format|
      format.html { redirect_to ois_url, notice: 'Oi was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_oi
      @oi = Oi.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def oi_params
      params.require(:oi).permit(:name, :description)
    end
end
