class AccessesController < ApplicationController
  before_action :set_access, only: [:show, :edit, :update, :destroy]

  # GET /accesses
  # GET /accesses.json
  def index
   @users = User.all
   @image = Image.find params[:image_id] 
   @accesses = @image.accesses
  end

  # GET /accesses/1
  # GET /accesses/1.json
  def show
  end

  # GET /accesses/new
  def new
    @users = User.all
    @image = Image.find params[:image_id]
    @access = @image.accesses.new
  end

  # GET /accesses/1/edit
  def edit
    @access = Access.find params[:id]
   
    @users = User.all
  end

  # POST /accesses
  # POST /accesses.json
  def create
    @users = User.all
    @image = Image.find params[:image_id]
    @access = @image.accesses.new(access_params)
    @access.user_id = params[:user_id]    
    respond_to do |format|
      if @access.save
        format.html { redirect_to image_url(@image), notice: 'Access was successfully created.' }
        format.json { render :show, status: :created, location: @access }
      else
        format.html { render :new }
        format.json { render json: @access.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /accesses/1
  # PATCH/PUT /accesses/1.json
  def update
    respond_to do |format|
      if @access.update(access_params)
        format.html { redirect_to image_accesses_url(@access.image), notice: 'Access was successfully updated.' }
        format.json { render :show, status: :ok, location: @access }
      else
        format.html { render :edit }
        format.json { render json: @access.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /accesses/1
  # DELETE /accesses/1.json
  def destroy
    @access.destroy
    respond_to do |format|
      format.html { redirect_to image_url(@access.image), notice: 'Access was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_access
      @access = Access.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def access_params
      params.permit(:image_id, :user_id)
    end
end
