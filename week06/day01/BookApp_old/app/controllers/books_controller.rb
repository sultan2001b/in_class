class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def show
    @book = Book.find_by(id: params[:id])
  end

  def new
    @book = Book.new
  end

  def create
    book = Book.create book_params
    redirect_to books_path

  end

  def edit
    @book = Book.find_by(id: params[:id])
  end

# @author = Author.find(params[:id])

#     @author.update(author_params)
#      redirect_to authors_path

  def update
    @book = Book.find_by(id: params[:id])
    @book.update(book_params)
    redirect_to books_path
  end

  private

  def book_params
    params.require(:book).permit(:title, :image, :blurb, :author_id)
  end
end
