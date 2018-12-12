class PostsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]
  
  
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find_by(id: params[:id])
  end

  def new
    @post=Post.new
  end

  def edit
    @post = Post.find_by(id: params[:id])

  end

  def update
    post = Post.find_by(id: params[:id])
    post.update post_params
    redirect_to posts_path

  end

  def create
    # post = Post.create(post_params)
    current_user.posts.create(post_params)
    # post = Post.create({title: params[:title], ....user_id: current_user.id})
    redirect_to posts_path
  end

  private
  def post_params
    params.require(:post).permit(:title, :body)
  end
end
