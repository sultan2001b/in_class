class BooksController < ApplicationController

    def index
        @books2 = [
      "In Search of Lost Time",
      "War and Peace",
      "Hamlet",
      "Anna Karenina",
      "Madame Bovary",
    ]
    end

    def show
@title = params[:title]
    end

end
