class TodosController < ApplicationController
    skip_before_action :verify_authenticity_token
      #
  def index
    @todos = Todo.all
    respond_to do |format|
    format.html
    format.json {render json: @todos}
    end
  end

  def show
    @todo = Todo.find_by(id: params[:id])
    # render json: @todo
    respond_to do |format|
    format.html
    format.json {render json: @todo}
    end
  end

  def new
  end

  def edit
  end

   def create
    todo =Todo.create(todoParams)
    render json: todo
  end

  private
  def todoParams
      params.require(:todo).permit(:content);

  end
end
