class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @posts }
    end
  end

  def show
  end

  def new
  end

  def edit
  end
end
