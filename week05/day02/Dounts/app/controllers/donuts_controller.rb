class DonutsController < ApplicationController
  def index
    @donuts = Donut.all
  end

  def show
    @donut = Donut.find(params[:id])
  end

  def edit
    @donut = Donut.find(params[:id])
  end

  def new
    @donut = Donut.new
  end

  def create
    # binding.pry
    donut_params = params.require(:donut).permit(:name, :size, :frosting_type)
    @donut = Donut.create(donut_params)
    redirect_to @donut
  end

  def update
 donut_params = params.require(:donut).permit(:name, :size, :frosting_type)
    @donut = Donut.find(params[:id])
    @donut.update(donut_params)
    redirect_to @donut
  end

  def destroy

  end

end
