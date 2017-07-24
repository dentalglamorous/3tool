class WheelDeflectionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_wheel_deflection, only: [:show, :edit, :update, :destroy]

  # GET /wheel_deflections
  # GET /wheel_deflections.json
  def index
    @wheel_deflections = WheelDeflection.all    
  end

  # GET /wheel_deflections/1
  # GET /wheel_deflections/1.json
  def show
  end

  # GET /wheel_deflections/new
  def new
    @wheel_deflection = WheelDeflection.new
  end

  # GET /wheel_deflections/1/edit
  def edit
  end

  # POST /wheel_deflections
  # POST /wheel_deflections.json
  def create
    @wheel_deflection = WheelDeflection.new(wheel_deflection_params)

    respond_to do |format|
      if @wheel_deflection.save
        format.html { redirect_to @wheel_deflection, notice: 'Wheel deflection was successfully created.' }
        format.json { render :show, status: :created, location: @wheel_deflection }
      else
        format.html { render :new }
        format.json { render json: @wheel_deflection.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wheel_deflections/1
  # PATCH/PUT /wheel_deflections/1.json
  def update
    respond_to do |format|
      if @wheel_deflection.update(wheel_deflection_params)
        format.html { redirect_to @wheel_deflection, notice: 'Wheel deflection was successfully updated.' }
        format.json { render :show, status: :ok, location: @wheel_deflection }
      else
        format.html { render :edit }
        format.json { render json: @wheel_deflection.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wheel_deflections/1
  # DELETE /wheel_deflections/1.json
  def destroy
    @wheel_deflection.destroy
    respond_to do |format|
      format.html { redirect_to wheel_deflections_url, notice: 'Wheel deflection was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wheel_deflection
      @wheel_deflection = WheelDeflection.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wheel_deflection_params
      params.require(:wheel_deflection).permit(
          :name, :description, :tire_width, :tire_width_unit, :compression_modulus,
          :compression_modulus_unit, :load_on_wheel, :load_on_wheel_unit,
          :outside_radius, :outside_radius_unit, :tread_thicknes, :tread_thickness_unit
      )
    end
end
